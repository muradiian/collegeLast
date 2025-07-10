import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Image, 
  Upload, 
  Save,
  Eye,
  EyeOff,
  Palette,
  Type,
  Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MediaLibraryModal from '@/components/MediaLibraryModal';

const AdminHeroEditor = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [heroData, setHeroData] = useState({
    title: 'Welcome to Our College',
    subtitle: 'Empowering minds, shaping futures through quality education',
    description: 'Discover our comprehensive programs designed to prepare you for success in your chosen field. Join our community of learners and innovators.',
    backgroundImage: '',
    ctaText: 'Explore Programs',
    ctaLink: '/programs',
    showOverlay: true,
    overlayOpacity: 0.6,
    textColor: '#ffffff',
    buttonStyle: 'primary'
  });

  useEffect(() => {
    const saved = localStorage.getItem('heroData');
    if (saved) {
      try { setHeroData(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('heroData', JSON.stringify(heroData));
      toast({
        title: 'Hero section saved',
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
    setHeroData({
      title: 'Welcome to Our College',
      subtitle: 'Empowering minds, shaping futures through quality education',
      description: 'Discover our comprehensive programs designed to prepare you for success in your chosen field. Join our community of learners and innovators.',
      backgroundImage: '',
      ctaText: 'Explore Programs',
      ctaLink: '/programs',
      showOverlay: true,
      overlayOpacity: 0.6,
      textColor: '#ffffff',
      buttonStyle: 'primary'
    });
    toast({
      title: 'Reset to defaults',
      description: 'Hero section has been reset to default values.',
    });
  };

  const handleImageSelect = (url: string) => {
    setHeroData({ ...heroData, backgroundImage: url });
    toast({
      title: 'Image selected',
      description: 'Background image has been updated.',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setHeroData({ ...heroData, backgroundImage: url });
      toast({
        title: 'Image uploaded',
        description: 'New background image has been uploaded.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Hero Section Editor</h1>
        <p className="text-gray-600 mt-2">
          Customize the main hero section of your website.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Type className="h-5 w-5" />
                <span>Content</span>
              </CardTitle>
              <CardDescription>
                Edit the text content of your hero section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                  placeholder="Enter hero title"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={heroData.subtitle}
                  onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={heroData.description}
                  onChange={(e) => setHeroData({ ...heroData, description: e.target.value })}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ctaText">Button Text</Label>
                  <Input
                    id="ctaText"
                    value={heroData.ctaText}
                    onChange={(e) => setHeroData({ ...heroData, ctaText: e.target.value })}
                    placeholder="Call to action text"
                  />
                </div>
                <div>
                  <Label htmlFor="ctaLink">Button Link</Label>
                  <Input
                    id="ctaLink"
                    value={heroData.ctaLink}
                    onChange={(e) => setHeroData({ ...heroData, ctaLink: e.target.value })}
                    placeholder="/programs"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image className="h-5 w-5" />
                <span>Background Image</span>
              </CardTitle>
              <CardDescription>
                Choose or upload a background image for your hero section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                {heroData.backgroundImage && (
                  <img 
                    src={heroData.backgroundImage} 
                    alt="Background preview"
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
                    id="hero-image-upload"
                  />
                  <Button variant="outline" asChild className="w-full">
                    <label htmlFor="hero-image-upload">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Image
                    </label>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Styling</span>
              </CardTitle>
              <CardDescription>
                Customize the appearance of your hero section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="overlay">Show Overlay</Label>
                <Switch
                  id="overlay"
                  checked={heroData.showOverlay}
                  onCheckedChange={(checked) => setHeroData({ ...heroData, showOverlay: checked })}
                />
              </div>
              {heroData.showOverlay && (
                <div>
                  <Label htmlFor="opacity">Overlay Opacity</Label>
                  <Input
                    id="opacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={heroData.overlayOpacity}
                    onChange={(e) => setHeroData({ ...heroData, overlayOpacity: parseFloat(e.target.value) })}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    Opacity: {Math.round(heroData.overlayOpacity * 100)}%
                  </div>
                </div>
              )}
              <div>
                <Label htmlFor="textColor">Text Color</Label>
                <Input
                  id="textColor"
                  type="color"
                  value={heroData.textColor}
                  onChange={(e) => setHeroData({ ...heroData, textColor: e.target.value })}
                  className="w-20 h-10"
                />
              </div>
              <div>
                <Label htmlFor="buttonStyle">Button Style</Label>
                <select
                  id="buttonStyle"
                  value={heroData.buttonStyle}
                  onChange={(e) => setHeroData({ ...heroData, buttonStyle: e.target.value })}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="outline">Outline</option>
                </select>
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
                See how your hero section will look on the website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showPreview && (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  {heroData.backgroundImage && (
                    <img 
                      src={heroData.backgroundImage}
                      alt="Hero background"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {heroData.showOverlay && (
                    <div 
                      className="absolute inset-0 bg-black"
                      style={{ opacity: heroData.overlayOpacity }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h1 className="text-4xl font-bold mb-4" style={{ color: heroData.textColor }}>
                        {heroData.title}
                      </h1>
                      <p className="text-xl mb-4" style={{ color: heroData.textColor }}>
                        {heroData.subtitle}
                      </p>
                      <p className="mb-6 max-w-md" style={{ color: heroData.textColor }}>
                        {heroData.description}
                      </p>
                      <Button 
                        variant={heroData.buttonStyle as any}
                        className="text-lg px-8 py-3"
                      >
                        {heroData.ctaText}
                      </Button>
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

export default AdminHeroEditor; 