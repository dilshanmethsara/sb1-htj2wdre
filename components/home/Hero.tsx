"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../shared/AnimatedSection';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1} direction="right">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                Innovative Web Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Elevate Your <span className="text-blue-600">Digital Presence</span> With Modern Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                We help businesses transform their online presence with cutting-edge web development and strategic digital marketing solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/#contact">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </Link>
                <Link href="/#features">
                  <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg transition-colors flex items-center justify-center">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="left">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden relative">
              {/* Dashboard Preview Image */}
              <div className="p-1">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 relative">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Business Dashboard</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Performance Overview</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: <Zap size={20} />, title: "Traffic", value: "34.7k", change: "+12.4%" },
                      { icon: <Shield size={20} />, title: "Conversion", value: "4.3%", change: "+2.1%" },
                      { icon: <LineChart size={20} />, title: "Revenue", value: "$25.4k", change: "+18.3%" }
                    ].map((item, index) => (
                      <div key={index} className={cn(
                        "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col",
                        index === 0 ? "col-span-1" : index === 1 ? "col-span-1" : "col-span-1"
                      )}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{item.title}</span>
                          <span className="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 p-1 rounded">
                            {item.icon}
                          </span>
                        </div>
                        <div className="flex items-end justify-between">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</span>
                          <span className="text-green-600 dark:text-green-400 text-sm font-medium">{item.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white">Monthly Performance</h4>
                      <select className="text-sm bg-gray-100 dark:bg-gray-700 border-none rounded p-1">
                        <option>Last 30 Days</option>
                      </select>
                    </div>
                    <div className="h-40 w-full flex items-end space-x-2">
                      {[35, 45, 30, 60, 75, 45, 55, 70, 65, 80, 65, 75].map((height, i) => (
                        <div key={i} className="relative flex-1 group">
                          <div 
                            className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 rounded-t transition-all duration-300" 
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {height}%
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}