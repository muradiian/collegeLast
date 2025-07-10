import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  Save, 
  Settings,
  Shield,
  Bell,
  Palette,
  Database
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [settings, setSettings] = useState({
    general: {
      siteName: "Երևանի Պետական հումանիտար-տեխնիկական քոլեջ",
      siteDescription: "Բարձրորակ կրթություն և մասնագիտական պատրաստում",
      adminEmail: "admin@college.am",
      timezone: "Asia/Yerevan"
    },
    security: {
      requireLogin: true,
      sessionTimeout: 30,
      enableTwoFactor: false,
      allowGuestAccess: false
    },
    notifications: {
      emailNotifications: true,
      browserNotifications: true,
      updateAlerts: true
    },
    appearance: {
      theme: "light",
      primaryColor: "#2563eb",
      enableAnimations: true
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem('settingsData');
    if (saved) {
      try { setSettings(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('settingsData', JSON.stringify(settings));
      toast({
        title: 'Settings saved',
        description: 'Your settings have been updated successfully.',
      });
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Failed to save. Please check your browser settings.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your website settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Settings Forms */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>General Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.general.siteName}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: {...settings.general, siteName: e.target.value}
                  })}
                  placeholder="Enter site name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={settings.general.siteDescription}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: {...settings.general, siteDescription: e.target.value}
                  })}
                  placeholder="Enter site description"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input
                  id="adminEmail"
                  value={settings.general.adminEmail}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: {...settings.general, adminEmail: e.target.value}
                  })}
                  placeholder="Enter admin email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={settings.general.timezone}
                  onChange={(e) => setSettings({
                    ...settings,
                    general: {...settings.general, timezone: e.target.value}
                  })}
                  placeholder="Enter timezone"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Require Login</Label>
                  <p className="text-sm text-gray-500">
                    Require authentication for admin access
                  </p>
                </div>
                <Switch
                  checked={settings.security.requireLogin}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    security: {...settings.security, requireLogin: checked}
                  })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-500">
                    Enable 2FA for additional security
                  </p>
                </div>
                <Switch
                  checked={settings.security.enableTwoFactor}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    security: {...settings.security, enableTwoFactor: checked}
                  })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Guest Access</Label>
                  <p className="text-sm text-gray-500">
                    Allow guest access to certain features
                  </p>
                </div>
                <Switch
                  checked={settings.security.allowGuestAccess}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    security: {...settings.security, allowGuestAccess: checked}
                  })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.emailNotifications}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    notifications: {...settings.notifications, emailNotifications: checked}
                  })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Browser Notifications</Label>
                  <p className="text-sm text-gray-500">
                    Show browser notifications
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.browserNotifications}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    notifications: {...settings.notifications, browserNotifications: checked}
                  })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Update Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Notify about system updates
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.updateAlerts}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    notifications: {...settings.notifications, updateAlerts: checked}
                  })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Appearance Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <Input
                  id="primaryColor"
                  type="color"
                  value={settings.appearance.primaryColor}
                  onChange={(e) => setSettings({
                    ...settings,
                    appearance: {...settings.appearance, primaryColor: e.target.value}
                  })}
                  className="w-20 h-10"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Animations</Label>
                  <p className="text-sm text-gray-500">
                    Show animations and transitions
                  </p>
                </div>
                <Switch
                  checked={settings.appearance.enableAnimations}
                  onCheckedChange={(checked) => setSettings({
                    ...settings,
                    appearance: {...settings.appearance, enableAnimations: checked}
                  })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview and Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>System Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Version</span>
                  <span className="text-sm font-medium">1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Last Updated</span>
                  <span className="text-sm font-medium">2024-01-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Database Size</span>
                  <span className="text-sm font-medium">2.4 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Users</span>
                  <span className="text-sm font-medium">1</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Export Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Import Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Reset to Defaults
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                Clear Cache
              </Button>
            </CardContent>
          </Card>

          <Button 
            onClick={handleSave} 
            disabled={isLoading}
            className="w-full"
          >
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings; 