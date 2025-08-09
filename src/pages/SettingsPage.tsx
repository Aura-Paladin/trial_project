import React, { useState } from 'react';
import { Bell, Shield, User, Mail, Phone, MapPin, Eye, EyeOff, Trash2, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onNavigate }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newProducts: true,
    claimUpdates: true,
    reviewReminders: true,
    marketingEmails: false,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showReviews: true,
    showClaimedProducts: false,
    allowDataCollection: true,
    allowPersonalization: true,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (setting: string, value: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: value }));
  };

  const handlePrivacyChange = (setting: string, value: string | boolean) => {
    setPrivacySettings(prev => ({ ...prev, [setting]: value }));
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile data
    console.log('Profile saved:', profileData);
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save password
    console.log('Password updated');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleNotificationSave = () => {
    // Save notification settings
    console.log('Notification settings saved:', notificationSettings);
  };

  const handlePrivacySave = () => {
    // Save privacy settings
    console.log('Privacy settings saved:', privacySettings);
  };

  const handleExportData = () => {
    // Export user data
    console.log('Exporting user data...');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Delete account
      console.log('Account deletion requested');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Account Settings
          </h1>
          <p className="text-xl text-gray-600">
            Manage your account preferences and privacy settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <User className="w-6 h-6 text-[#65E856]" />
                  <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                </div>

                <form onSubmit={handleProfileSave} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) => handleProfileChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) => handleProfileChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="text"
                        value={profileData.address}
                        onChange={(e) => handleProfileChange('address', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <Input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => handleProfileChange('city', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <Input
                        type="text"
                        value={profileData.state}
                        onChange={(e) => handleProfileChange('state', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <Input
                        type="text"
                        value={profileData.zipCode}
                        onChange={(e) => handleProfileChange('zipCode', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-[#65E856] hover:bg-[#55d846] text-white px-6"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Bell className="w-6 h-6 text-[#65E856]" />
                  <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Email Notifications</span>
                          <p className="text-sm text-gray-600">Receive notifications via email</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailNotifications}
                          onChange={(e) => handleNotificationChange('emailNotifications', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">New Products</span>
                          <p className="text-sm text-gray-600">Get notified about new free products</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.newProducts}
                          onChange={(e) => handleNotificationChange('newProducts', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Claim Updates</span>
                          <p className="text-sm text-gray-600">Updates about your claimed products</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.claimUpdates}
                          onChange={(e) => handleNotificationChange('claimUpdates', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Review Reminders</span>
                          <p className="text-sm text-gray-600">Reminders to write product reviews</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.reviewReminders}
                          onChange={(e) => handleNotificationChange('reviewReminders', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Marketing Emails</span>
                          <p className="text-sm text-gray-600">Promotional offers and updates</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.marketingEmails}
                          onChange={(e) => handleNotificationChange('marketingEmails', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Other Notifications</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">SMS Notifications</span>
                          <p className="text-sm text-gray-600">Receive text messages for important updates</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.smsNotifications}
                          onChange={(e) => handleNotificationChange('smsNotifications', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Push Notifications</span>
                          <p className="text-sm text-gray-600">Browser notifications for real-time updates</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.pushNotifications}
                          onChange={(e) => handleNotificationChange('pushNotifications', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={handleNotificationSave}
                      className="bg-[#65E856] hover:bg-[#55d846] text-white px-6"
                    >
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-[#65E856]" />
                  <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Visibility</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="profileVisibility"
                          value="public"
                          checked={privacySettings.profileVisibility === 'public'}
                          onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 focus:ring-[#65E856]"
                        />
                        <div>
                          <span className="text-gray-900 font-medium">Public</span>
                          <p className="text-sm text-gray-600">Your profile and reviews are visible to everyone</p>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="profileVisibility"
                          value="private"
                          checked={privacySettings.profileVisibility === 'private'}
                          onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 focus:ring-[#65E856]"
                        />
                        <div>
                          <span className="text-gray-900 font-medium">Private</span>
                          <p className="text-sm text-gray-600">Your profile is only visible to you</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Content Visibility</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Show My Reviews</span>
                          <p className="text-sm text-gray-600">Allow others to see reviews you've written</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.showReviews}
                          onChange={(e) => handlePrivacyChange('showReviews', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Show Claimed Products</span>
                          <p className="text-sm text-gray-600">Display products you've claimed on your profile</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.showClaimedProducts}
                          onChange={(e) => handlePrivacyChange('showClaimedProducts', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Data Usage</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Allow Data Collection</span>
                          <p className="text-sm text-gray-600">Help us improve by collecting anonymous usage data</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.allowDataCollection}
                          onChange={(e) => handlePrivacyChange('allowDataCollection', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>

                      <label className="flex items-center justify-between">
                        <div>
                          <span className="text-gray-900 font-medium">Personalized Recommendations</span>
                          <p className="text-sm text-gray-600">Use your activity to suggest relevant products</p>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.allowPersonalization}
                          onChange={(e) => handlePrivacyChange('allowPersonalization', e.target.checked)}
                          className="w-4 h-4 text-[#65E856] border-gray-300 rounded focus:ring-[#65E856]"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={handlePrivacySave}
                      className="bg-[#65E856] hover:bg-[#55d846] text-white px-6"
                    >
                      Save Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <div className="space-y-6">
              {/* Change Password */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-[#65E856]" />
                    <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
                  </div>

                  <form onSubmit={handlePasswordSave} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? 'text' : 'password'}
                          value={passwordData.newPassword}
                          onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={passwordData.confirmPassword}
                          onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#65E856] hover:bg-[#55d846] text-white px-6"
                      >
                        Update Password
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Data Export */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Export</h3>
                  <p className="text-gray-600 mb-4">
                    Download a copy of all your data including profile information, claimed products, and reviews.
                  </p>
                  <Button
                    onClick={handleExportData}
                    variant="outline"
                    className="border-gray-300 hover:border-[#65E856] hover:text-[#65E856]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export My Data
                  </Button>
                </CardContent>
              </Card>

              {/* Delete Account */}
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Delete Account</h3>
                  <p className="text-gray-600 mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button
                    onClick={handleDeleteAccount}
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};