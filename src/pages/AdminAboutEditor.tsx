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
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MediaLibraryModal from '@/components/MediaLibraryModal';

const AdminAboutEditor = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [aboutData, setAboutData] = useState({
    title: 'About Our College',
    subtitle: 'Empowering students with quality education since 1995',
    description: 'Our college is committed to providing excellent education and preparing students for successful careers. We offer a wide range of programs designed to meet the needs of today\'s job market.',
    image: '',
    showImage: true,
    imagePosition: 'left',
    features: [
      {
        id: 1,
        title: 'Quality Education',
        description: 'Comprehensive curriculum designed for success',
        icon: '🎓'
      },
      {
        id: 2,
        title: 'Expert Faculty',
        description: 'Experienced professionals and educators',
        icon: '👨‍🏫'
      },
      {
        id: 3,
        title: 'Modern Facilities',
        description: 'State-of-the-art classrooms and labs',
        icon: '🏢'
      }
    ],
    stats: [
      { label: 'Years of Excellence', value: '25+' },
      { label: 'Students Enrolled', value: '2000+' },
      { label: 'Programs Offered', value: '15+' }
    ],
    isActive: true
  });

  useEffect(() => {
    const saved = localStorage.getItem('aboutData');
    if (saved) setAboutData(JSON.parse(saved));
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
    setIsLoading(false);
    toast({
      title: 'About section saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  const handleReset = () => {
    setAboutData({
      title: 'About Our College',
      subtitle: 'Empowering students with quality education since 1995',
      description: 'Our college is committed to providing excellent education and preparing students for successful careers. We offer a wide range of programs designed to meet the needs of today\'s job market.',
      image: '',
      showImage: true,
      imagePosition: 'left',
      features: [
        {
          id: 1,
          title: 'Quality Education',
          description: 'Comprehensive curriculum designed for success',
          icon: '🎓'
        },
        {
          id: 2,
          title: 'Expert Faculty',
          description: 'Experienced professionals and educators',
          icon: '👨‍🏫'
        },
        {
          id: 3,
          title: 'Modern Facilities',
          description: 'State-of-the-art classrooms and labs',
          icon: '🏢'
        }
      ],
      stats: [
        { label: 'Years of Excellence', value: '25+' },
        { label: 'Students Enrolled', value: '2000+' },
        { label: 'Programs Offered', value: '15+' }
      ],
      isActive: true
    });
    toast({
      title: 'Reset to defaults',
      description: 'About section has been reset to default values.',
    });
  };

  const handleImageSelect = (url: string) => {
    setAboutData({ ...aboutData, image: url });
    toast({
      title: 'Image selected',
      description: 'About section image has been updated.',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAboutData({ ...aboutData, image: url });
      toast({
        title: 'Image uploaded',
        description: 'New image has been uploaded.',
      });
    }
  };

  const addFeature = () => {
    const newFeature = {
      id: Date.now(),
      title: 'New Feature',
      description: 'Feature description',
      icon: '✨'
    };
    setAboutData({
      ...aboutData,
      features: [...aboutData.features, newFeature]
    });
    toast({
      title: 'Feature added',
      description: 'New feature has been added.',
    });
  };

  const removeFeature = (id: number) => {
    setAboutData({
      ...aboutData,
      features: aboutData.features.filter(feature => feature.id !== id)
    });
    toast({
      title: 'Feature removed',
      description: 'Feature has been removed.',
    });
  };

  const updateFeature = (id: number, field: string, value: string) => {
    setAboutData({
      ...aboutData,
      features: aboutData.features.map(feature =>
        feature.id === id ? { ...feature, [field]: value } : feature
      )
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">About Section Editor</h1>
        <p className="text-gray-600 mt-2">
          Customize the about section content and layout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Edit the main content of your about section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={aboutData.title}
                  onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={aboutData.subtitle}
                  onChange={(e) => setAboutData({ ...aboutData, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={aboutData.description}
                  onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
                  placeholder="Enter description"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image</CardTitle>
              <CardDescription>
                Choose an image for the about section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="showImage">Show Image</Label>
                <Switch
                  id="showImage"
                  checked={aboutData.showImage}
                  onCheckedChange={(checked) => setAboutData({ ...aboutData, showImage: checked })}
                />
              </div>
              {aboutData.showImage && (
                <>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {aboutData.image && (
                      <img 
                        src={aboutData.image} 
                        alt="About section image"
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
                        id="about-image-upload"
                      />
                      <Button variant="outline" asChild className="w-full">
                        <label htmlFor="about-image-upload">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Image
                        </label>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="imagePosition">Image Position</Label>
                    <select
                      id="imagePosition"
                      value={aboutData.imagePosition}
                      onChange={(e) => setAboutData({ ...aboutData, imagePosition: e.target.value })}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Features</CardTitle>
                <Button onClick={addFeature} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>
              <CardDescription>
                Manage the features displayed in the about section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aboutData.features.map((feature) => (
                <div key={feature.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{feature.icon}</span>
                      <Badge variant="secondary">Feature {feature.id}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFeature(feature.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={feature.title}
                      onChange={(e) => updateFeature(feature.id, 'title', e.target.value)}
                      placeholder="Feature title"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={feature.description}
                      onChange={(e) => updateFeature(feature.id, 'description', e.target.value)}
                      placeholder="Feature description"
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>Icon (emoji)</Label>
                    <Input
                      value={feature.icon}
                      onChange={(e) => updateFeature(feature.id, 'icon', e.target.value)}
                      placeholder="🎓"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Stats</CardTitle>
                <Button onClick={() => setAboutData({
                  ...aboutData,
                  stats: [...aboutData.stats, { label: '', value: '' }]
                })} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Stat
                </Button>
              </div>
              <CardDescription>
                Edit the statistics displayed in the about section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="border rounded-lg p-4 space-y-3 flex items-center gap-4">
                  <div className="flex-1">
                    <Label>Value</Label>
                    <Input
                      value={stat.value}
                      onChange={e => {
                        const newStats = [...aboutData.stats];
                        newStats[idx].value = e.target.value;
                        setAboutData({ ...aboutData, stats: newStats });
                      }}
                      placeholder="Stat value"
                    />
                  </div>
                  <div className="flex-1">
                    <Label>Label</Label>
                    <Input
                      value={stat.label}
                      onChange={e => {
                        const newStats = [...aboutData.stats];
                        newStats[idx].label = e.target.value;
                        setAboutData({ ...aboutData, stats: newStats });
                      }}
                      placeholder="Stat label"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setAboutData({
                      ...aboutData,
                      stats: aboutData.stats.filter((_, i) => i !== idx)
                    })}
                    title="Remove Stat"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure display settings for the about section.
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
                  checked={aboutData.isActive}
                  onCheckedChange={(checked) => setAboutData({ ...aboutData, isActive: checked })}
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
                See how your about section will look on the website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showPreview && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {aboutData.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                      {aboutData.subtitle}
                    </p>
                  </div>

                  <div className={`flex flex-col ${aboutData.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                    {aboutData.showImage && (
                      <div className="flex-1">
                        {aboutData.image && (
                          <img 
                            src={aboutData.image} 
                            alt="About section"
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        {aboutData.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aboutData.features.map((feature) => (
                      <div key={feature.id} className="text-center p-4 border rounded-lg">
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    {aboutData.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
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

export default AdminAboutEditor; 