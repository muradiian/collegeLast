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
  Calendar,
  FileText,
  Users,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MediaLibraryModal from '@/components/MediaLibraryModal';

const AdminAdmissionsEditor = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [admissionsData, setAdmissionsData] = useState({
    title: 'Admissions',
    subtitle: 'Join our community of learners and innovators',
    description: 'Ready to start your educational journey? Learn about our admission process, requirements, and important dates. We\'re here to help you every step of the way.',
    image: '',
    showImage: true,
    requirements: [
      {
        id: 1,
        title: 'High School Diploma',
        description: 'Valid high school diploma or equivalent',
        isRequired: true
      },
      {
        id: 2,
        title: 'Application Form',
        description: 'Completed application form with personal details',
        isRequired: true
      },
      {
        id: 3,
        title: 'Transcripts',
        description: 'Official academic transcripts from previous institutions',
        isRequired: true
      }
    ],
    deadlines: [
      {
        id: 1,
        title: 'Fall Semester',
        date: '2024-08-15',
        description: 'Application deadline for fall semester'
      },
      {
        id: 2,
        title: 'Spring Semester',
        date: '2024-12-15',
        description: 'Application deadline for spring semester'
      }
    ],
    contactInfo: {
      email: 'admissions@college.edu',
      phone: '+1 (555) 123-4567',
      address: '123 College Street, City, State 12345'
    },
    isActive: true
  });

  useEffect(() => {
    const saved = localStorage.getItem('admissionsData');
    if (saved) {
      try { setAdmissionsData(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('admissionsData', JSON.stringify(admissionsData));
      toast({
        title: 'Admissions section saved',
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
    setAdmissionsData({
      title: 'Admissions',
      subtitle: 'Join our community of learners and innovators',
      description: 'Ready to start your educational journey? Learn about our admission process, requirements, and important dates. We\'re here to help you every step of the way.',
      image: '',
      showImage: true,
      requirements: [
        {
          id: 1,
          title: 'High School Diploma',
          description: 'Valid high school diploma or equivalent',
          isRequired: true
        },
        {
          id: 2,
          title: 'Application Form',
          description: 'Completed application form with personal details',
          isRequired: true
        },
        {
          id: 3,
          title: 'Transcripts',
          description: 'Official academic transcripts from previous institutions',
          isRequired: true
        }
      ],
      deadlines: [
        {
          id: 1,
          title: 'Fall Semester',
          date: '2024-08-15',
          description: 'Application deadline for fall semester'
        },
        {
          id: 2,
          title: 'Spring Semester',
          date: '2024-12-15',
          description: 'Application deadline for spring semester'
        }
      ],
      contactInfo: {
        email: 'admissions@college.edu',
        phone: '+1 (555) 123-4567',
        address: '123 College Street, City, State 12345'
      },
      isActive: true
    });
    toast({
      title: 'Reset to defaults',
      description: 'Admissions section has been reset to default values.',
    });
  };

  const handleImageSelect = (url: string) => {
    setAdmissionsData({ ...admissionsData, image: url });
    toast({
      title: 'Image selected',
      description: 'Admissions section image has been updated.',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAdmissionsData({ ...admissionsData, image: url });
      toast({
        title: 'Image uploaded',
        description: 'New image has been uploaded.',
      });
    }
  };

  const addRequirement = () => {
    const newRequirement = {
      id: Date.now(),
      title: 'New Requirement',
      description: 'Requirement description',
      isRequired: true
    };
    setAdmissionsData({
      ...admissionsData,
      requirements: [...admissionsData.requirements, newRequirement]
    });
    toast({
      title: 'Requirement added',
      description: 'New requirement has been added.',
    });
  };

  const removeRequirement = (id: number) => {
    setAdmissionsData({
      ...admissionsData,
      requirements: admissionsData.requirements.filter(req => req.id !== id)
    });
    toast({
      title: 'Requirement removed',
      description: 'Requirement has been removed.',
    });
  };

  const updateRequirement = (id: number, field: string, value: any) => {
    setAdmissionsData({
      ...admissionsData,
      requirements: admissionsData.requirements.map(req =>
        req.id === id ? { ...req, [field]: value } : req
      )
    });
  };

  const addDeadline = () => {
    const newDeadline = {
      id: Date.now(),
      title: 'New Deadline',
      date: new Date().toISOString().split('T')[0],
      description: 'Deadline description'
    };
    setAdmissionsData({
      ...admissionsData,
      deadlines: [...admissionsData.deadlines, newDeadline]
    });
    toast({
      title: 'Deadline added',
      description: 'New deadline has been added.',
    });
  };

  const removeDeadline = (id: number) => {
    setAdmissionsData({
      ...admissionsData,
      deadlines: admissionsData.deadlines.filter(deadline => deadline.id !== id)
    });
    toast({
      title: 'Deadline removed',
      description: 'Deadline has been removed.',
    });
  };

  const updateDeadline = (id: number, field: string, value: string) => {
    setAdmissionsData({
      ...admissionsData,
      deadlines: admissionsData.deadlines.map(deadline =>
        deadline.id === id ? { ...deadline, [field]: value } : deadline
      )
    });
  };

  const updateContactInfo = (field: string, value: string) => {
    setAdmissionsData({
      ...admissionsData,
      contactInfo: { ...admissionsData.contactInfo, [field]: value }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admissions Section Editor</h1>
        <p className="text-gray-600 mt-2">
          Customize the admissions section content and requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Edit the main content of your admissions section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={admissionsData.title}
                  onChange={(e) => setAdmissionsData({ ...admissionsData, title: e.target.value })}
                  placeholder="Enter section title"
                />
              </div>
              <div>
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={admissionsData.subtitle}
                  onChange={(e) => setAdmissionsData({ ...admissionsData, subtitle: e.target.value })}
                  placeholder="Enter subtitle"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={admissionsData.description}
                  onChange={(e) => setAdmissionsData({ ...admissionsData, description: e.target.value })}
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
                Choose an image for the admissions section.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="showImage">Show Image</Label>
                <Switch
                  id="showImage"
                  checked={admissionsData.showImage}
                  onCheckedChange={(checked) => setAdmissionsData({ ...admissionsData, showImage: checked })}
                />
              </div>
              {admissionsData.showImage && (
                <>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {admissionsData.image && (
                      <img 
                        src={admissionsData.image} 
                        alt="Admissions section image"
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
                        id="admissions-image-upload"
                      />
                      <Button variant="outline" asChild className="w-full">
                        <label htmlFor="admissions-image-upload">
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
              <div className="flex items-center justify-between">
                <CardTitle>Requirements</CardTitle>
                <Button onClick={addRequirement} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Requirement
                </Button>
              </div>
              <CardDescription>
                Manage admission requirements and criteria.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {admissionsData.requirements.map((requirement) => (
                <div key={requirement.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <Badge variant="secondary">Requirement {requirement.id}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={requirement.isRequired}
                        onCheckedChange={(checked) => updateRequirement(requirement.id, 'isRequired', checked)}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRequirement(requirement.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={requirement.title}
                      onChange={(e) => updateRequirement(requirement.id, 'title', e.target.value)}
                      placeholder="Requirement title"
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={requirement.description}
                      onChange={(e) => updateRequirement(requirement.id, 'description', e.target.value)}
                      placeholder="Requirement description"
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Deadlines</CardTitle>
                <Button onClick={addDeadline} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Deadline
                </Button>
              </div>
              <CardDescription>
                Manage important application deadlines.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {admissionsData.deadlines.map((deadline) => (
                <div key={deadline.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <Badge variant="secondary">Deadline {deadline.id}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDeadline(deadline.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={deadline.title}
                        onChange={(e) => updateDeadline(deadline.id, 'title', e.target.value)}
                        placeholder="Deadline title"
                      />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input
                        type="date"
                        value={deadline.date}
                        onChange={(e) => updateDeadline(deadline.id, 'date', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={deadline.description}
                      onChange={(e) => updateDeadline(deadline.id, 'description', e.target.value)}
                      placeholder="Deadline description"
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Update contact details for admissions inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={admissionsData.contactInfo.email}
                  onChange={(e) => updateContactInfo('email', e.target.value)}
                  placeholder="admissions@college.edu"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={admissionsData.contactInfo.phone}
                  onChange={(e) => updateContactInfo('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={admissionsData.contactInfo.address}
                  onChange={(e) => updateContactInfo('address', e.target.value)}
                  placeholder="123 College Street, City, State 12345"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure display settings for the admissions section.
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
                  checked={admissionsData.isActive}
                  onCheckedChange={(checked) => setAdmissionsData({ ...admissionsData, isActive: checked })}
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
                See how your admissions section will look on the website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showPreview && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {admissionsData.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                      {admissionsData.subtitle}
                    </p>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      {admissionsData.description}
                    </p>
                  </div>

                  {admissionsData.showImage && (
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      {admissionsData.image && (
                        <img 
                          src={admissionsData.image} 
                          alt="Admissions section"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                      <div className="space-y-3">
                        {admissionsData.requirements.map((requirement) => (
                          <div key={requirement.id} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h4 className="font-medium">{requirement.title}</h4>
                              <p className="text-sm text-gray-600">{requirement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Important Deadlines</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {admissionsData.deadlines.map((deadline) => (
                          <div key={deadline.id} className="border rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar className="h-4 w-4 text-blue-500" />
                              <h4 className="font-medium">{deadline.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{deadline.description}</p>
                            <p className="text-sm font-medium text-blue-600">{deadline.date}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Email:</strong> {admissionsData.contactInfo.email}</p>
                        <p><strong>Phone:</strong> {admissionsData.contactInfo.phone}</p>
                        <p><strong>Address:</strong> {admissionsData.contactInfo.address}</p>
                      </div>
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

export default AdminAdmissionsEditor; 