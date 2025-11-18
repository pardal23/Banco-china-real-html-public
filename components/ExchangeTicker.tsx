import React from 'react';
import { MOCK_RATES } from '../constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock trend data for the sparkline
const TREND_DATA = [
  { name: '1', value: 718 },
  { name: '2', value: 720 },
  { name: '3', value: 719 },
  { name: '4', value: 721 },
  { name: '5', value: 722 },
  { name: '6', value: 721 },
  { name: '7', value: 723 },
];

export const ExchangeTicker: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Exchange Rates</h3>
            <span className="text-xs text-gray-400">Live Updates</span>
        </div>

        <div className="space-y-4">
            {MOCK_RATES.map((rate) => (
                <div key={rate.currency} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">{rate.flag}</span>
                        <div>
                            <div className="font-bold text-gray-800 text-sm">{rate.currency}</div>
                            <div className="text-xs text-gray-500">CNY</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-mono font-bold text-gray-800">{rate.sell}</div>
                        <div className={`text-xs ${rate.sell > rate.buy ? 'text-red-500' : 'text-green-500'}`}>
                            {((rate.sell - rate.buy) / rate.buy * 100).toFixed(2)}%
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Mini Chart Decoration */}
        <div className="h-16 mt-4">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TREND_DATA}>
                    <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B10A32" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#B10A32" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#B10A32" fillOpacity={1} fill="url(#colorVal)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        
        <button className="w-full mt-2 text-xs text-center text-boc-red hover:underline">
            View All Currencies
        </button>
    </div>
  );
};