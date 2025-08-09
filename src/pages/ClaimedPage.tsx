import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, Star, Filter, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface ClaimedPageProps {
  onNavigate: (page: string) => void;
}

export const ClaimedPage: React.FC<ClaimedPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const claimedItems = [
    {
      id: '1',
      title: 'Premium Wireless Headphones',
      brand: 'AudioTech',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      claimedDate: '2024-03-10',
      status: 'delivered',
      trackingNumber: 'FL2024001234',
      estimatedValue: 89.99,
      deliveredDate: '2024-03-15',
      reviewStatus: 'completed',
    },
    {
      id: '2',
      title: 'Organic Skincare Set',
      brand: 'NaturalGlow',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      claimedDate: '2024-03-08',
      status: 'shipped',
      trackingNumber: 'FL2024001235',
      estimatedValue: 45.99,
      estimatedDelivery: '2024-03-18',
      reviewStatus: 'pending',
    },
    {
      id: '3',
      title: 'Smart Fitness Tracker',
      brand: 'FitLife',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      claimedDate: '2024-03-05',
      status: 'processing',
      trackingNumber: 'FL2024001236',
      estimatedValue: 129.99,
      estimatedDelivery: '2024-03-20',
      reviewStatus: 'pending',
    },
    {
      id: '4',
      title: 'Artisan Coffee Beans',
      brand: 'RoastMaster',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      claimedDate: '2024-03-01',
      status: 'delivered',
      trackingNumber: 'FL2024001237',
      estimatedValue: 24.99,
      deliveredDate: '2024-03-07',
      reviewStatus: 'pending',
    },
    {
      id: '5',
      title: 'Eco-Friendly Water Bottle',
      brand: 'GreenLife',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      claimedDate: '2024-02-28',
      status: 'delivered',
      trackingNumber: 'FL2024001238',
      estimatedValue: 19.99,
      deliveredDate: '2024-03-05',
      reviewStatus: 'completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'shipped':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'processing':
        return <Clock className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const filteredItems = claimedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const totalSaved = claimedItems.reduce((sum, item) => sum + item.estimatedValue, 0);
  const deliveredCount = claimedItems.filter(item => item.status === 'delivered').length;
  const pendingReviews = claimedItems.filter(item => item.reviewStatus === 'pending').length;

  const statusCounts = {
    all: claimedItems.length,
    processing: claimedItems.filter(item => item.status === 'processing').length,
    shipped: claimedItems.filter(item => item.status === 'shipped').length,
    delivered: claimedItems.filter(item => item.status === 'delivered').length,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            My Claims
          </h1>
          <p className="text-xl text-gray-600">
            Track your claimed products and manage your reviews
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#65E856] rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{claimedItems.length}</div>
              <div className="text-sm text-gray-600">Total Claims</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{deliveredCount}</div>
              <div className="text-sm text-gray-600">Delivered</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">${totalSaved.toFixed(0)}</div>
              <div className="text-sm text-gray-600">Money Saved</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{pendingReviews}</div>
              <div className="text-sm text-gray-600">Reviews Needed</div>
            </CardContent>
          </Card>
        </div>

        {claimedItems.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No claims yet
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't claimed any products yet. Start browsing to find amazing free products!
            </p>
            <Button
              size="lg"
              className="bg-[#65E856] hover:bg-[#55d846] text-white px-8"
              onClick={() => onNavigate('browse')}
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
              <TabsList className="grid w-full lg:w-auto grid-cols-4">
                <TabsTrigger value="all" onClick={() => setSelectedStatus('all')}>
                  All ({statusCounts.all})
                </TabsTrigger>
                <TabsTrigger value="processing" onClick={() => setSelectedStatus('processing')}>
                  Processing ({statusCounts.processing})
                </TabsTrigger>
                <TabsTrigger value="shipped" onClick={() => setSelectedStatus('shipped')}>
                  Shipped ({statusCounts.shipped})
                </TabsTrigger>
                <TabsTrigger value="delivered" onClick={() => setSelectedStatus('delivered')}>
                  Delivered ({statusCounts.delivered})
                </TabsTrigger>
              </TabsList>

              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search your claims..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <p className="text-gray-600">{item.brand}</p>
                            </div>
                            <Badge className={`${getStatusColor(item.status)} border w-fit`}>
                              <div className="flex items-center space-x-1">
                                {getStatusIcon(item.status)}
                                <span className="capitalize">{item.status}</span>
                              </div>
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Claimed:</span> {new Date(item.claimedDate).toLocaleDateString()}
                            </div>
                            <div>
                              <span className="font-medium">Tracking:</span> {item.trackingNumber}
                            </div>
                            <div>
                              <span className="font-medium">Value:</span> ${item.estimatedValue}
                            </div>
                          </div>
                          
                          {item.status === 'delivered' && item.deliveredDate && (
                            <div className="text-sm text-green-600">
                              <CheckCircle className="w-4 h-4 inline mr-1" />
                              Delivered on {new Date(item.deliveredDate).toLocaleDateString()}
                            </div>
                          )}
                          
                          {item.status === 'shipped' && item.estimatedDelivery && (
                            <div className="text-sm text-blue-600">
                              <Truck className="w-4 h-4 inline mr-1" />
                              Expected delivery: {new Date(item.estimatedDelivery).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                          >
                            Track Package
                          </Button>
                          
                          {item.status === 'delivered' && item.reviewStatus === 'pending' && (
                            <Button
                              size="sm"
                              className="bg-[#65E856] hover:bg-[#55d846] text-white"
                            >
                              Write Review
                            </Button>
                          )}
                          
                          {item.reviewStatus === 'completed' && (
                            <Badge variant="outline" className="text-center">
                              Review Complete
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processing">
              <div className="space-y-4">
                {filteredItems.filter(item => item.status === 'processing').map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      {/* Same card content structure as above */}
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.brand}</p>
                          <div className="mt-2 text-sm text-gray-600">
                            Claimed on {new Date(item.claimedDate).toLocaleDateString()}
                          </div>
                        </div>
                        <Badge className={getStatusColor(item.status)}>
                          <Clock className="w-4 h-4 mr-1" />
                          Processing
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shipped">
              <div className="space-y-4">
                {filteredItems.filter(item => item.status === 'shipped').map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.brand}</p>
                          <div className="mt-2 text-sm text-blue-600">
                            <Truck className="w-4 h-4 inline mr-1" />
                            Expected delivery: {item.estimatedDelivery && new Date(item.estimatedDelivery).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Badge className={getStatusColor(item.status)}>
                            <Truck className="w-4 h-4 mr-1" />
                            Shipped
                          </Badge>
                          <Button variant="outline" size="sm">
                            Track Package
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="delivered">
              <div className="space-y-4">
                {filteredItems.filter(item => item.status === 'delivered').map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.brand}</p>
                          <div className="mt-2 text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 inline mr-1" />
                            Delivered on {item.deliveredDate && new Date(item.deliveredDate).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Badge className={getStatusColor(item.status)}>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Delivered
                          </Badge>
                          {item.reviewStatus === 'pending' && (
                            <Button size="sm" className="bg-[#65E856] hover:bg-[#55d846] text-white">
                              Write Review
                            </Button>
                          )}
                          {item.reviewStatus === 'completed' && (
                            <Badge variant="outline">Review Complete</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};