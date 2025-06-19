import React, { useState } from 'react';
import { Download, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const EmissionsChart: React.FC = () => {
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('Complete');
  const [timeFilter, setTimeFilter] = useState('yearly');

  const generateTimeBasedData = (baseData: { value: number; year: string }[], timeFilter: string) => {
    switch (timeFilter) {
      case 'monthly':
        return baseData.slice(-12).map((item, index) => ({
          ...item,
          year: new Date(new Date().getFullYear(), new Date().getMonth() - 11 + index, 1)
            .toLocaleDateString('en-US', { year: 'numeric', month: 'short' }),
        }));
      case 'quarterly':
        return baseData
          .filter((_, index) => index % 3 === 0)
          .slice(-8)
          .map((item, index) => ({
            ...item,
            year: `Q${(index % 4) + 1} ${Math.floor(2024 - (7 - index) / 4)}`,
          }));
      case 'yearly':
      default:
        return baseData;
    }
  };

  const baseData = {
    All: {
      Complete: [
        { value: 549, year: '2019' }, { value: 278, year: '2020' },
        { value: 875, year: '2021' }, { value: 617, year: '2022' },
        { value: 506, year: '2023' }, { value: 36, year: '2024' },
        { value: 185, year: '2025' }, { value: 191, year: '2026' },
        { value: 122, year: '2027' }, { value: 550, year: '2028' },
        { value: 881, year: '2029' }, { value: 539, year: '2030' },
        { value: 269, year: '2031' }, { value: 29, year: '2032' },
        { value: 82, year: '2033' }, { value: 44, year: '2034' },
        { value: 109, year: '2035' }, { value: 106, year: '2036' },
        { value: 607, year: '2037' }, { value: 528, year: '2038' },
      ],
      Estimate: [
        { value: 420, year: '2019' }, { value: 310, year: '2020' },
        { value: 680, year: '2021' }, { value: 520, year: '2022' },
        { value: 450, year: '2023' }, { value: 280, year: '2024' },
        { value: 320, year: '2025' }, { value: 380, year: '2026' },
        { value: 290, year: '2027' }, { value: 470, year: '2028' },
        { value: 650, year: '2029' }, { value: 410, year: '2030' },
        { value: 350, year: '2031' }, { value: 180, year: '2032' },
        { value: 220, year: '2033' }, { value: 190, year: '2034' },
        { value: 260, year: '2035' }, { value: 240, year: '2036' },
        { value: 480, year: '2037' }, { value: 420, year: '2038' },
      ],
    },
    Refurbishment: {
      Complete: [
        { value: 549, year: '2019' }, { value: 278, year: '2020' },
        { value: 875, year: '2021' }, { value: 617, year: '2022' },
        { value: 506, year: '2023' }, { value: 36, year: '2024' },
        { value: 185, year: '2025' }, { value: 191, year: '2026' },
        { value: 122, year: '2027' }, { value: 550, year: '2028' },
        { value: 881, year: '2029' }, { value: 539, year: '2030' },
        { value: 269, year: '2031' }, { value: 29, year: '2032' },
        { value: 82, year: '2033' }, { value: 44, year: '2034' },
        { value: 109, year: '2035' }, { value: 106, year: '2036' },
        { value: 607, year: '2037' }, { value: 528, year: '2038' },
      ],
      Estimate: [
        { value: 420, year: '2019' }, { value: 310, year: '2020' },
        { value: 680, year: '2021' }, { value: 520, year: '2022' },
        { value: 450, year: '2023' }, { value: 280, year: '2024' },
        { value: 320, year: '2025' }, { value: 380, year: '2026' },
        { value: 290, year: '2027' }, { value: 470, year: '2028' },
        { value: 650, year: '2029' }, { value: 410, year: '2030' },
        { value: 350, year: '2031' }, { value: 180, year: '2032' },
        { value: 220, year: '2033' }, { value: 190, year: '2034' },
        { value: 260, year: '2035' }, { value: 240, year: '2036' },
        { value: 480, year: '2037' }, { value: 420, year: '2038' },
      ],
    },
    'New build': {
      Complete: [
        { value: 549, year: '2019' }, { value: 278, year: '2020' },
        { value: 875, year: '2021' }, { value: 617, year: '2022' },
        { value: 506, year: '2023' }, { value: 36, year: '2024' },
        { value: 185, year: '2025' }, { value: 191, year: '2026' },
        { value: 122, year: '2027' }, { value: 550, year: '2028' },
        { value: 881, year: '2029' }, { value: 539, year: '2030' },
        { value: 269, year: '2031' }, { value: 29, year: '2032' },
        { value: 82, year: '2033' }, { value: 44, year: '2034' },
        { value: 109, year: '2035' }, { value: 106, year: '2036' },
        { value: 607, year: '2037' }, { value: 528, year: '2038' },
      ],
      Estimate: [
        { value: 420, year: '2019' }, { value: 310, year: '2020' },
        { value: 680, year: '2021' }, { value: 520, year: '2022' },
        { value: 450, year: '2023' }, { value: 280, year: '2024' },
        { value: 320, year: '2025' }, { value: 380, year: '2026' },
        { value: 290, year: '2027' }, { value: 470, year: '2028' },
        { value: 650, year: '2029' }, { value: 410, year: '2030' },
        { value: 350, year: '2031' }, { value: 180, year: '2032' },
        { value: 220, year: '2033' }, { value: 190, year: '2034' },
        { value: 260, year: '2035' }, { value: 240, year: '2036' },
        { value: 480, year: '2037' }, { value: 420, year: '2038' },
      ],
    },
  };

  const currentData = baseData[filterType as keyof typeof baseData]?.[filterStatus as keyof typeof baseData[keyof typeof baseData]] || baseData.All.Complete;
  const chartData = generateTimeBasedData(currentData, timeFilter);
  const maxValue = Math.max(...chartData.map(item => item.value), 1200);

  const handleDownload = () => {
  const csvContent = chartData
    .map((item) => `${item.year},${item.value}`)
    .join('\n');
  const blob = new Blob([`Year,Value\n${csvContent}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'emissions-data.csv');
  link.click();
};


  return (
    <section id="emissions" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter by
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Refurbishment', 'New build', 'All'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          filterType === type
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Status
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Complete', 'Estimate'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          filterStatus === status
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Time Filter
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['monthly', 'quarterly', 'yearly'].map((time) => (
                      <button
                        key={time}
                        onClick={() => setTimeFilter(time)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          timeFilter === time
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    EMBODIED CARBON EMISSIONS
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Intensity measured by kgCO₂e/m²
                  </p>
                </div>
                <button
                    onClick={handleDownload}
                        className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download the data</span>
                </button>
              </div>

              {/* Chart */}
              <div className="relative h-80">
                <div className="absolute inset-0 flex flex-col justify-center">
                  <div className="border-t-2 border-dashed border-gray-400 relative">
                    <span className="absolute -top-3 left-0 text-xs text-gray-600 dark:text-gray-400">500</span>
                  </div>
                  <div className="border-t border-gray-600 relative mt-8">
                    <span className="absolute -top-3 left-0 text-xs text-gray-600 dark:text-gray-400">600</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between space-x-1 h-full pt-8">
                  {chartData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(item.value / maxValue) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.8 }}
                      className="relative group w-full"
                    >
                      <div
                        className={`w-full rounded-t ${
                          item.value > 600 ? 'bg-blue-700' : 'bg-blue-500'
                        } hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
                        style={{ minHeight: '4px' }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          {item.value} kgCO₂e/m²
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600 dark:text-gray-400 -ml-8">
                  <span>1200</span>
                  <span>1000</span>
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmissionsChart;
