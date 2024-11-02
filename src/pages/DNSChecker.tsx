import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Server, Shield, CheckCircle, XCircle, AlertCircle, Loader2, Download } from 'lucide-react';

interface DNSRecord {
  name: string;
  type: string;
  TTL: number;
  data: string;
}

interface DNSResponse {
  Status: number;
  Answer?: DNSRecord[];
}

interface DomainResult {
  domain: string;
  mx?: DNSResponse;
  txt?: DNSResponse;
  ns?: DNSResponse;
  spf?: DNSRecord[];
  dkim?: DNSResponse;
  dmarc?: DNSResponse;
}

const DNSChecker = () => {
  const [domain, setDomain] = useState('');
  const [bulkDomains, setBulkDomains] = useState('');
  const [dkimSelector, setDkimSelector] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMultiDomain, setIsMultiDomain] = useState(false);
  const [singleResult, setSingleResult] = useState<DomainResult | null>(null);
  const [bulkResults, setBulkResults] = useState<DomainResult[]>([]);

  const validateDomain = (domain: string) => {
    const domainRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  };

  const getDkimSelector = (mxRecords: DNSResponse) => {
    if (!mxRecords?.Answer) return null;
    
    const mxData = mxRecords.Answer[0]?.data.toLowerCase();
    if (mxData?.includes('google') || mxData?.includes('gmail')) {
      return 'google';
    }
    if (mxData?.includes('outlook') || mxData?.includes('microsoft')) {
      return 'selector1';
    }
    return null;
  };

  const fetchDNSRecords = async (domain: string, type: string) => {
    try {
      const response = await fetch(`https://dns.google.com/resolve?name=${domain}&type=${type}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${type} records:`, error);
      return null;
    }
  };

  const checkSingleDomain = async (domainToCheck: string) => {
    if (!validateDomain(domainToCheck)) {
      throw new Error('Invalid domain format');
    }

    const mxRecords = await fetchDNSRecords(domainToCheck, 'MX');
    const autoSelector = getDkimSelector(mxRecords);
    
    const [txtRecords, nsRecords, dmarcRecords] = await Promise.all([
      fetchDNSRecords(domainToCheck, 'TXT'),
      fetchDNSRecords(domainToCheck, 'NS'),
      fetchDNSRecords(`_dmarc.${domainToCheck}`, 'TXT'),
    ]);

    const spfRecords = txtRecords?.Answer?.filter(record => 
      record.data.toLowerCase().includes('v=spf1')
    );

    let dkimRecords = null;
    if (autoSelector) {
      dkimRecords = await fetchDNSRecords(`${autoSelector}._domainkey.${domainToCheck}`, 'TXT');
    } else if (dkimSelector) {
      dkimRecords = await fetchDNSRecords(`${dkimSelector}._domainkey.${domainToCheck}`, 'TXT');
    }

    return {
      domain: domainToCheck,
      mx: mxRecords,
      txt: txtRecords,
      ns: nsRecords,
      spf: spfRecords,
      dkim: dkimRecords,
      dmarc: dmarcRecords,
    };
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isMultiDomain) {
        const domains = bulkDomains
          .split('\n')
          .map(d => d.trim())
          .filter(d => d);

        if (domains.length > 10) {
          throw new Error('Maximum 10 domains allowed');
        }

        const results = [];
        for (const d of domains) {
          try {
            const result = await checkSingleDomain(d);
            results.push(result);
          } catch (error) {
            results.push({
              domain: d,
              error: error.message,
            });
          }
        }
        setBulkResults(results);
        setSingleResult(null);
      } else {
        const result = await checkSingleDomain(domain);
        setSingleResult(result);
        setBulkResults([]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const results = isMultiDomain ? bulkResults : [singleResult];
    const csvContent = [
      ['Domain', 'MX Records', 'SPF Records', 'DKIM Records', 'DMARC Records', 'Nameservers'],
      ...results.map(result => [
        result.domain,
        result.mx?.Answer ? result.mx.Answer.map(r => r.data).join('; ') : 'Invalid',
        result.spf?.length ? result.spf.map(r => r.data).join('; ') : 'Invalid',
        result.dkim?.Answer ? result.dkim.Answer.map(r => r.data).join('; ') : 'Invalid',
        result.dmarc?.Answer ? result.dmarc.Answer.map(r => r.data).join('; ') : 'Invalid',
        result.ns?.Answer ? result.ns.Answer.map(r => r.data).join('; ') : 'Invalid',
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dns_check_results.csv';
    link.click();
  };

  const RecordSection = ({ title, records, type }: { title: string; records: any; type: string }) => {
    const getErrorMessage = () => {
      switch (type) {
        case 'MX':
          return 'No MX records found. Email delivery will not work without MX records.';
        case 'SPF':
          return 'No SPF records found. This may affect email deliverability.';
        case 'DKIM':
          return 'No DKIM records found. Configure DKIM to improve email authentication.';
        case 'DMARC':
          return 'No DMARC policy found. Adding DMARC helps prevent email spoofing.';
        default:
          return `No ${type} records found`;
      }
    };

    return (
      <div className="feature-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center">
            <Server className="w-5 h-5 text-orange-500 mr-2" />
            {title}
          </h3>
          {records?.Answer ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}
        </div>
        
        {records?.Answer ? (
          <div className="space-y-2">
            {records.Answer.map((record: DNSRecord, index: number) => (
              <div key={index} className="bg-black/40 p-3 rounded-lg">
                <div className="text-sm text-gray-400">TTL: {record.TTL}</div>
                <div className="font-mono text-sm break-all">{record.data}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-red-200">{getErrorMessage()}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ResultsSection = ({ result }: { result: DomainResult }) => (
    <div className="grid md:grid-cols-2 gap-6">
      <RecordSection title="MX Records" records={result.mx} type="MX" />
      <RecordSection title="SPF Records" records={{ Answer: result.spf }} type="SPF" />
      <RecordSection title="DKIM Records" records={result.dkim} type="DKIM" />
      <RecordSection title="DMARC Records" records={result.dmarc} type="DMARC" />
      <RecordSection title="Nameservers" records={result.ns} type="NS" />
      <RecordSection title="TXT Records" records={result.txt} type="TXT" />
    </div>
  );

  return (
    <div className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DNS <span className="text-gradient">Checker</span>
            </h1>
            <p className="text-xl text-gray-300">
              Verify your domain's email deliverability setup
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => {
                  setIsMultiDomain(false);
                  setError('');
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  !isMultiDomain 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-black/40 text-gray-300 hover:bg-black/60'
                }`}
              >
                Single Domain
              </button>
              <button
                onClick={() => {
                  setIsMultiDomain(true);
                  setError('');
                }}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  isMultiDomain 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-black/40 text-gray-300 hover:bg-black/60'
                }`}
              >
                Multiple Domains
              </button>
            </div>

            <form onSubmit={handleCheck} className="space-y-4">
              {isMultiDomain ? (
                <div className="relative">
                  <textarea
                    value={bulkDomains}
                    onChange={(e) => setBulkDomains(e.target.value)}
                    placeholder="Enter domains (one per line, max 10)"
                    rows={5}
                    className="w-full bg-black/40 border border-orange-500/20 rounded-lg px-4 py-3 text-white
                             focus:outline-none focus:border-orange-500/50 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="Enter domain name (e.g., example.com)"
                    className="w-full bg-black/40 border border-orange-500/20 rounded-lg px-4 py-3 text-white
                             focus:outline-none focus:border-orange-500/50 transition-all duration-300"
                  />
                </div>
              )}

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={dkimSelector}
                  onChange={(e) => setDkimSelector(e.target.value)}
                  placeholder="DKIM selector (optional - auto-detected for Google & Microsoft)"
                  className="w-full bg-black/40 border border-orange-500/20 rounded-lg px-4 py-3 text-white
                           focus:outline-none focus:border-orange-500/50 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading || (!isMultiDomain && !domain) || (isMultiDomain && !bulkDomains)}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                <span>Check DNS</span>
              </button>
            </form>
          </div>

          {(singleResult || bulkResults.length > 0) && (
            <div className="space-y-6">
              {(isMultiDomain ? bulkResults.length > 0 : singleResult) && (
                <div className="flex justify-end mb-4">
                  <button
                    onClick={exportToCSV}
                    className="flex items-center space-x-2 px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Results</span>
                  </button>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={isMultiDomain ? 'multi' : 'single'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMultiDomain ? (
                    bulkResults.map((result) => (
                      <div key={result.domain} className="space-y-4 mb-8">
                        <h2 className="text-2xl font-bold text-gradient">{result.domain}</h2>
                        <ResultsSection result={result} />
                      </div>
                    ))
                  ) : (
                    singleResult && <ResultsSection result={singleResult} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DNSChecker;