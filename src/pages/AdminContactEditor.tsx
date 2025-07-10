import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Save,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Image,
  Upload,
  Settings,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MediaLibraryModal from '@/components/MediaLibraryModal';

const AdminContactEditor = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [contactData, setContactData] = useState({
    title: 'Contact Us',
    subtitle: 'Get in touch with us',
    description: 'Have questions? We\'re here to help. Reach out to us through any of the methods below and we\'ll get back to you as soon as possible.',
    image: '',
    showImage: true,
    contactInfo: {
      email: 'info@college.edu',
      phone: '+1 (555) 123-4567',
      address: '123 College Street, City, State 12345',
      website: 'www.college.edu'
    },
    officeHours: [
      {
        id: 1,
        day: 'Monday - Friday',
        hours: '8:00 AM - 6:00 PM',
        isActive: true
      },
      {
        id: 2,
        day: 'Saturday',
        hours: '9:00 AM - 2:00 PM',
        isActive: true
      },
      {
        id: 3,
        day: 'Sunday',
        hours: 'Closed',
        isActive: false
      }
    ],
    socialMedia: [
      {
        id: 1,
        platform: 'Facebook',
        url: 'https://facebook.com/college',
        isActive: true
      },
      {
        id: 2,
        platform: 'Twitter',
        url: 'https://twitter.com/college',
        isActive: true
      },
      {
        id: 3,
        platform: 'LinkedIn',
        url: 'https://linkedin.com/company/college',
        isActive: true
      }
    ],
    isActive: true
  });

  useEffect(() => {
    const saved = localStorage.getItem('contactData');
    if (saved) {
      try { setContactData(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('contactData', JSON.stringify(contactData));
      toast({
        title: 'Contact section saved',
        description: 'Your changes have been saved successfully.',
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

  const handleReset = () => {
    setContactData({
      title: 'Contact Us',
      subtitle: 'Get in touch with us',
      description: 'Have questions? We\'re here to help. Reach out to us through any of the methods below and we\'ll get back to you as soon as possible.',
      image: '',
      showImage: true,
      contactInfo: {
        email: 'info@college.edu',
        phone: '+1 (555) 123-4567',
        address: '123 College Street, City, State 12345',
        website: 'www.college.edu'
      },
      officeHours: [
        {
          id: 1,
          day: 'Monday - Friday',
          hours: '8:00 AM - 6:00 PM',
          isActive: true
        },
        {
          id: 2,
          day: 'Saturday',
          hours: '9:00 AM - 2:00 PM',
          isActive: true
        },
        {
          id: 3,
          day: 'Sunday',
          hours: 'Closed',
          isActive: false
        }
      ],
      socialMedia: [
        {
          id: 1,
          platform: 'Facebook',
          url: 'https://facebook.com/college',
          isActive: true
        },
        {
          id: 2,
          platform: 'Twitter',
          url: 'https://twitter.com/college',
          isActive: true
        },
        {
          id: 3,
          platform: 'LinkedIn',
          url: 'https://linkedin.com/company/college',
          isActive: true
        }
      ],
      isActive: true
    });
    toast({
      title: 'Reset to defaults',
      description: 'Contact section has been reset to default values.',
    });
  };

  const handleImageSelect = (url: string) => {
    setContactData({ ...contactData, image: url });
    toast({
      title: 'Image selected',
      description: 'Contact section image has been updated.',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setContactData({ ...contactData, image: url });
      toast({
        title: 'Image uploaded',
        description: 'New image has been uploaded.',
      });
    }
  };

  const updateContactInfo = (field: string, value: string) => {
    setContactData({
      ...contactData,
      contactInfo: { ...contactData.contactInfo, [field]: value }
    });
  };

  const addOfficeHour = () => {
    const newHour = {
      id: Date.now(),
      day: 'New Day',
      hours: '9:00 AM - 5:00 PM',
      isActive: true
    };
    setContactData({
      ...contactData,
      officeHours: [...contactData.officeHours, newHour]
    });
    toast({
      title: 'Office hour added',
      description: 'New office hour has been added.',
    });
  };

  const removeOfficeHour = (id: number) => {
    setContactData({
      ...contactData,
      officeHours: contactData.officeHours.filter(hour => hour.id !== id)
    });
    toast({
      title: 'Office hour removed',
      description: 'Office hour has been removed.',
    });
  };

  const updateOfficeHour = (id: number, field: string, value: any) => {
    setContactData({
      ...contactData,
      officeHours: contactData.officeHours.map(hour =>
        hour.id === id ? { ...hour, [field]: value } : hour
      )
    });
  };

  const addSocialMedia = () => {
    const newSocial = {
      id: Date.now(),
      platform: 'New Platform',
      url: 'https://example.com',
      isActive: true
    };
    setContactData({
      ...contactData,
      socialMedia: [...contactData.socialMedia, newSocial]
    });
    toast({
      title: 'Social media added',
      description: 'New social media platform has been added.',
    });
  };

  const removeSocialMedia = (id: number) => {
    setContactData({
      ...contactData,
      socialMedia: contactData.socialMedia.filter(social => social.id !== id)
    });
    toast({
      title: 'Social media removed',
      description: 'Social media platform has been removed.',
    });
  };

  const updateSocialMedia = (id: number, field: string, value: any) => {
    setContactData({
      ...contactData,
      socialMedia: contactData.socialMedia.map(social =>
        social.id === id ? { ...social, [field]: value } : social
      )
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contact Section Editor</h1>
        <p className="text-gray-600 mt-2">
          Customize the contact section content and information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Edit the main content of your contact section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={contactData.title}
                  onChange={(e) => setContactData({ ...contactData, title: e.target.value })}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={contactData.subtitle}
                  onChange={(e) => setContactData({ ...contactData, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={contactData.description}
                  onChange={(e) => setContactData({ ...contactData, description: e.target.value })}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image</CardTitle>
              <CardDescription>
                Choose an image for the contact section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="showImage">Show Image</Label>
                <Switch
                  id="showImage"
                  checked={contactData.showImage}
                  onCheckedChange={(checked) => setContactData({ ...contactData, showImage: checked })}
                />
              </div>
              {contactData.showImage && (
                <>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {contactData.image && (
                      <img 
                        src={contactData.image} 
                        alt="Contact section image"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <MediaLibraryModal
                      onSelect={handleImageSelect}
                      trigger={
                        <Button variant="outline" className="flex-1">
                          <Image className="h-4 w-4 mr-2" />
                          Choose from Media Library
                        </Button>
                      }
                    />
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="contact-image-upload"
                      />
                      <Button variant="outline" asChild className="w-full">
                        <label htmlFor="contact-image-upload">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Image
                        </label>
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update primary contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={contactData.contactInfo.email}
                  onChange={(e) => updateContactInfo('email', e.target.value)}
                  placeholder="info@college.edu"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={contactData.contactInfo.phone}
                  onChange={(e) => updateContactInfo('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={contactData.contactInfo.address}
                  onChange={(e) => updateContactInfo('address', e.target.value)}
                  placeholder="123 College Street, City, State 12345"
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={contactData.contactInfo.website}
                  onChange={(e) => updateContactInfo('website', e.target.value)}
                  placeholder="www.college.edu"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Office Hours</CardTitle>
                <Button onClick={addOfficeHour} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Hours
                </Button>
              </div>
              <CardDescription>
                Manage office hours and availability.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactData.officeHours.map((hour) => (
                <div key={hour.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <Badge variant="secondary">Hours {hour.id}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={hour.isActive}
                        onCheckedChange={(checked) => updateOfficeHour(hour.id, 'isActive', checked)}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOfficeHour(hour.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Day</Label>
                      <Input
                        value={hour.day}
                        onChange={(e) => updateOfficeHour(hour.id, 'day', e.target.value)}
                        placeholder="e.g., Monday - Friday"
                      />
                    </div>
                    <div>
                      <Label>Hours</Label>
                      <Input
                        value={hour.hours}
                        onChange={(e) => updateOfficeHour(hour.id, 'hours', e.target.value)}
                        placeholder="e.g., 8:00 AM - 6:00 PM"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Social Media</CardTitle>
                <Button onClick={addSocialMedia} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Platform
                </Button>
              </div>
              <CardDescription>
                Manage social media links and platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactData.socialMedia.map((social) => (
                <div key={social.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-green-500" />
                      <Badge variant="secondary">{social.platform}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={social.isActive}
                        onCheckedChange={(checked) => updateSocialMedia(social.id, 'isActive', checked)}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSocialMedia(social.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Platform</Label>
                      <Input
                        value={social.platform}
                        onChange={(e) => updateSocialMedia(social.id, 'platform', e.target.value)}
                        placeholder="e.g., Facebook"
                      />
                    </div>
                    <div>
                      <Label>URL</Label>
                      <Input
                        value={social.url}
                        onChange={(e) => updateSocialMedia(social.id, 'url', e.target.value)}
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure display settings for the contact section.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Active Section</Label>
                  <p className="text-sm text-gray-500">
                    Show this section on the website
                  </p>
                </div>
                <Switch
                  checked={contactData.isActive}
                  onCheckedChange={(checked) => setContactData({ ...contactData, isActive: checked })}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Live Preview</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {showPreview ? 'Hide' : 'Show'} Preview
                </Button>
              </div>
              <CardDescription>
                See how your contact section will look on the website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showPreview && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {contactData.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                      {contactData.subtitle}
                    </p>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      {contactData.description}
                    </p>
                  </div>

                  {contactData.showImage && (
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      {contactData.image && (
                        <img 
                          src={contactData.image} 
                          alt="Contact section"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-blue-500" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-gray-600">{contactData.contactInfo.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-green-500" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-gray-600">{contactData.contactInfo.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-red-500" />
                          <div>
                            <p className="font-medium">Address</p>
                            <p className="text-sm text-gray-600">{contactData.contactInfo.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="h-5 w-5 text-purple-500" />
                          <div>
                            <p className="font-medium">Website</p>
                            <p className="text-sm text-gray-600">{contactData.contactInfo.website}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                      <div className="space-y-2">
                        {contactData.officeHours.filter(h => h.isActive).map((hour) => (
                          <div key={hour.id} className="flex justify-between">
                            <span className="text-sm">{hour.day}</span>
                            <span className="text-sm font-medium">{hour.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {contactData.socialMedia.filter(s => s.isActive).map((social) => (
                        <a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {social.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={handleSave}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="w-full"
              >
                Reset to Defaults
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminContactEditor; 