import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Image, 
  Users, 
  Eye, 
  Edit, 
  Plus,
  TrendingUp,
  Activity,
  Calendar,
  RefreshCw
} from 'lucide-react';
import { getWebsiteStats, getContentStats, WebsiteStats, ContentStats } from '@/lib/analytics';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [websiteStats, setWebsiteStats] = useState<WebsiteStats | null>(null);
  const [contentStats, setContentStats] = useState<ContentStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const stats = await getWebsiteStats();
      const content = getContentStats();
      setWebsiteStats(stats);
      setContentStats(content);
    } catch (error) {
      console.error('Failed to load stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const stats = [
    {
      title: 'Բովանդակության բաժիններ',
      value: contentStats?.totalSections?.toString() || '6',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Ուսումնական ծրագրեր',
      value: contentStats?.totalPrograms?.toString() || '6',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Մեդիա ֆայլեր',
      value: contentStats?.totalMediaAssets?.toString() || '2',
      icon: Image,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Կայքի դիտումներ',
      value: websiteStats?.totalViews?.toLocaleString() || '0',
      icon: Eye,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const quickActions = [
    {
      title: 'Խմբագրել հերո էջը',
      description: 'Թարմացրեք գլխավոր բլոկի բովանդակությունը և նկարները',
      icon: Edit,
      path: '/admin/hero',
      color: 'bg-blue-500'
    },
    {
      title: 'Կառավարել ծրագրերը',
      description: `Ավելացնել կամ խմբագրել ուսումնական ծրագրեր (ներկայումս ${contentStats?.totalPrograms || 6})`,
      icon: Plus,
      path: '/admin/programs',
      color: 'bg-green-500'
    },
    {
      title: 'Վերբեռնել մեդիա',
      description: 'Ավելացնել նոր նկարներ և ֆայլեր',
      icon: Image,
      path: '/admin/media',
      color: 'bg-purple-500'
    },
    {
      title: 'Թարմացնել կապի տվյալները',
      description: 'Փոխել կոնտակտային տվյալները և հասցեն',
      icon: Edit,
      path: '/admin/contact',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Վահանակ</h1>
          <p className="text-gray-600 mt-2">
            Բարի գալուստ կայքի ադմինիստրատորի վահանակ։ Կառավարեք բովանդակությունը և հետևեք կայքի վիճակագրությանը։
          </p>
        </div>
        <Button 
          onClick={loadStats} 
          disabled={isLoading}
          variant="outline"
          className="flex items-center space-x-2 text-base px-4 py-2"
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Թարմացնել տվյալները</span>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Արագ գործողություններ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
                onClick={() => navigate(action.path)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${action.color} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Վերջին ակտիվություն</span>
            </CardTitle>
            <CardDescription>
              Կայքի բովանդակության վերջին փոփոխությունները
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Hero section updated</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New program added</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Contact information updated</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Website Analytics</span>
            </CardTitle>
            <CardDescription>
              {websiteStats?.lastUpdated && (
                <span>Last updated: {new Date(websiteStats.lastUpdated).toLocaleString()}</span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Page Views</span>
                <span className="text-sm font-medium">
                  {websiteStats?.pageViews?.toLocaleString() || '0'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Unique Visitors</span>
                <span className="text-sm font-medium">
                  {websiteStats?.uniqueVisitors?.toLocaleString() || '0'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg. Session Duration</span>
                <span className="text-sm font-medium">
                  {websiteStats?.sessionDuration ? formatDuration(websiteStats.sessionDuration) : '0m 0s'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-medium">
                  {websiteStats?.bounceRate ? `${websiteStats.bounceRate}%` : '0%'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Պե՞տք է օգնություն</h3>
              <p className="text-blue-100">
                Տեսեք մեր փաստաթղթերը կամ կապվեք աջակցության հետ՝ ադմին վահանակի հետ կապված հարցերի համար։
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-colors duration-150"
            >
              Ստանալ օգնություն
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard; 