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
  BookOpen,
  Users,
  Clock,
  Map,
  Shirt,
  Calculator,
  Code,
  BadgeDollarSign,
  Building
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import MediaLibraryModal from '@/components/MediaLibraryModal';

const iconMap = {
  Map,
  Shirt,
  Calculator,
  Code,
  BadgeDollarSign,
  Building,
  BookOpen
};

const AdminProgramsEditor = () => {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [publishedPrograms, setPublishedPrograms] = useState<any[]>([]);

  const [programsData, setProgramsData] = useState({
    title: 'Ուսումնական ծրագրեր',
    subtitle: 'Ընտրեք Ձեր հետաքրքրությունների և կարիերային նպատակների համապատասխան ծրագիրը',
    description: '',
    programs: [
      {
        id: 1,
        icon: 'Map',
        title: 'Զբոսաշրջային  ծառայությունների կազմակերպում օտար լեզուների խորացված իմացությամբ',
        description: 'Սովորեք ժամանակակից ծրագրավորման լեզուներ և զարգացրեք վեբ ու մոբայլ հավելվածներ',
        duration: '3 տարի',
        level: 'Մասնագիտական',
        color: 'bg-blue-500',
        image: '',
        isActive: true
      },
      {
        id: 2,
        icon: 'Shirt',
        title: 'Հագուստի մոդելավորում և նախագծում',
        description: 'Ստեղծագործական մտածողություն և տեխնիկական հմտություններ գրաֆիկական դիզայնի ոլորտում',
        duration: '3 տարի',
        level: 'Մասնագիտական',
        color: 'bg-purple-500',
        image: '',
        isActive: true
      },
      {
        id: 3,
        icon: 'Calculator',
        title: 'Հաշվապահական հաշվառում',
        description: 'Ուսումնասիրեք ֆինանսական կառավարումը և հաշվապահական հաշվառումը',
        duration: '3 տարի',
        level: 'Մասնագիտական',
        color: 'bg-green-500',
        image: '',
        isActive: true
      },
      {
        id: 4,
        icon: 'Code',
        title: 'Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում',
        description: 'Պատրաստվեք աշխատելու առողջապահության ոլորտում որպես բժշկական աշխատակից',
        duration: '4 տարի',
        level: 'Մասնագիտական',
        color: 'bg-red-500',
        image: '',
        isActive: true
      },
      {
        id: 5,
        icon: 'BadgeDollarSign',
        title: 'Ֆինանսներ',
        description: 'Ձեռք բերեք գիտելիքներ բիզնես կառավարման և մարքեթինգի ոլորտներում',
        duration: '3 տարի',
        level: 'Մասնագիտական',
        color: 'bg-orange-500',
        image: '',
        isActive: true
      },
      {
        id: 6,
        icon: 'Building',
        title: 'Քաղաքաշինական կադաստր',
        description: 'Տեխնիկական սարքավորումների նորոգում և սպասարկում',
        duration: '3 տարի',
        level: 'Մասնագիտական',
        color: 'bg-gray-500',
        image: '',
        isActive: true
      }
    ],
    isActive: true
  });

  useEffect(() => {
    async function fetchPrograms() {
      try {
        const res = await fetch('http://localhost:8080/programs');
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (Array.isArray(data)) {
            setPublishedPrograms(data);
            return;
          }
        } catch (err) {
          // Not valid JSON, fall through to fallback
        }
      } catch (err) {
        // Network error, fall through to fallback
      }
      // Fallback to local JSON
      try {
        const res = await fetch('/programs.json');
        const data = await res.json();
        if (Array.isArray(data)) {
          setPublishedPrograms(data);
          return;
        }
      } catch (err) {
        setPublishedPrograms([]);
      }
    }
    fetchPrograms();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('programsData');
    if (saved) {
      try { setProgramsData(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      localStorage.setItem('programsData', JSON.stringify(programsData));
      toast({
        title: 'Programs section saved',
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
    setProgramsData({
      title: 'Ուսումնական ծրագրեր',
      subtitle: 'Ընտրեք Ձեր հետաքրքրությունների և կարիերային նպատակների համապատասխան ծրագիրը',
      description: '',
      programs: [
        {
          id: 1,
          icon: 'Map',
          title: 'Զբոսաշրջային  ծառայությունների կազմակերպում օտար լեզուների խորացված իմացությամբ',
          description: 'Սովորեք ժամանակակից ծրագրավորման լեզուներ և զարգացրեք վեբ ու մոբայլ հավելվածներ',
          duration: '3 տարի',
          level: 'Մասնագիտական',
          color: 'bg-blue-500',
          image: '',
          isActive: true
        },
        {
          id: 2,
          icon: 'Shirt',
          title: 'Հագուստի մոդելավորում և նախագծում',
          description: 'Ստեղծագործական մտածողություն և տեխնիկական հմտություններ գրաֆիկական դիզայնի ոլորտում',
          duration: '3 տարի',
          level: 'Մասնագիտական',
          color: 'bg-purple-500',
          image: '',
          isActive: true
        },
        {
          id: 3,
          icon: 'Calculator',
          title: 'Հաշվապահական հաշվառում',
          description: 'Ուսումնասիրեք ֆինանսական կառավարումը և հաշվապահական հաշվառումը',
          duration: '3 տարի',
          level: 'Մասնագիտական',
          color: 'bg-green-500',
          image: '',
          isActive: true
        },
        {
          id: 4,
          icon: 'Code',
          title: 'Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում',
          description: 'Պատրաստվեք աշխատելու առողջապահության ոլորտում որպես բժշկական աշխատակից',
          duration: '4 տարի',
          level: 'Մասնագիտական',
          color: 'bg-red-500',
          image: '',
          isActive: true
        },
        {
          id: 5,
          icon: 'BadgeDollarSign',
          title: 'Ֆինանսներ',
          description: 'Ձեռք բերեք գիտելիքներ բիզնես կառավարման և մարքեթինգի ոլորտներում',
          duration: '3 տարի',
          level: 'Մասնագիտական',
          color: 'bg-orange-500',
          image: '',
          isActive: true
        },
        {
          id: 6,
          icon: 'Building',
          title: 'Քաղաքաշինական կադաստր',
          description: 'Տեխնիկական սարքավորումների նորոգում և սպասարկում',
          duration: '3 տարի',
          level: 'Մասնագիտական',
          color: 'bg-gray-500',
          image: '',
          isActive: true
        }
      ],
      isActive: true
    });
    toast({
      title: 'Reset to defaults',
      description: 'Programs section has been reset to default values.',
    });
  };

  const addProgram = () => {
    const newProgram = {
      id: Date.now(),
      icon: 'Map',
      title: 'New Program',
      description: 'Program description',
      duration: '3 years',
      level: 'Մասնագիտական',
      color: 'bg-blue-500',
      image: '',
      isActive: true
    };
    setProgramsData({
      ...programsData,
      programs: [...programsData.programs, newProgram]
    });
    toast({
      title: 'Program added',
      description: 'New program has been added.',
    });
  };

  const removeProgram = (id: number) => {
    setProgramsData({
      ...programsData,
      programs: programsData.programs.filter(program => program.id !== id)
    });
    toast({
      title: 'Program removed',
      description: 'Program has been removed.',
    });
  };

  const updateProgram = (id: number, field: string, value: any) => {
    setProgramsData({
      ...programsData,
      programs: programsData.programs.map(program =>
        program.id === id ? { ...program, [field]: value } : program
      )
    });
  };

  const handleImageSelect = (url: string, programId: number) => {
    updateProgram(programId, 'image', url);
    toast({
      title: 'Image selected',
      description: 'Program image has been updated.',
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, programId: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateProgram(programId, 'image', url);
      toast({
        title: 'Image uploaded',
        description: 'New program image has been uploaded.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Programs Section Editor</h1>
        <p className="text-gray-600 mt-2">
          Manage the programs section content and individual programs.
        </p>
      </div>

      <div className="flex flex-row gap-6 flex-wrap w-full">
        <Card>
          <CardHeader>
            <CardTitle>Section Content</CardTitle>
            <CardDescription>
              Edit the main content of your programs section.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={programsData.title}
                onChange={(e) => setProgramsData({ ...programsData, title: e.target.value })}
                placeholder="Enter section title"
              />
            </div>
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={programsData.subtitle}
                onChange={(e) => setProgramsData({ ...programsData, subtitle: e.target.value })}
                placeholder="Enter subtitle"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={programsData.description}
                onChange={(e) => setProgramsData({ ...programsData, description: e.target.value })}
                placeholder="Enter description"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Programs</CardTitle>
              <Button onClick={addProgram} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Program
              </Button>
            </div>
            <CardDescription>
              Manage individual programs and their details.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programsData.programs.map((program) => (
              <div key={program.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Program {program.id}</Badge>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={program.isActive}
                      onCheckedChange={(checked) => updateProgram(program.id, 'isActive', checked)}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeProgram(program.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={program.title}
                      onChange={(e) => updateProgram(program.id, 'title', e.target.value)}
                      placeholder="Program title"
                    />
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <Input
                      value={program.duration}
                      onChange={(e) => updateProgram(program.id, 'duration', e.target.value)}
                      placeholder="e.g., 4 years"
                    />
                  </div>
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={program.description}
                    onChange={(e) => updateProgram(program.id, 'description', e.target.value)}
                    placeholder="Program description"
                    rows={3}
                  />
                </div>

                <div>
                  <Label>Program Image</Label>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    {program.image && (
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-contain bg-gray-100"
                      />
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <MediaLibraryModal
                      onSelect={(url) => handleImageSelect(url, program.id)}
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
                        onChange={(e) => handleFileUpload(e, program.id)}
                        className="hidden"
                        id={`program-image-upload-${program.id}`}
                      />
                      <Button variant="outline" asChild className="w-full">
                        <label htmlFor={`program-image-upload-${program.id}`}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Image
                        </label>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6 w-full">
        <Card className="w-full">
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
              See how your programs section will look on the website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {showPreview && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {programsData.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">
                    {programsData.subtitle}
                  </p>
                  <p className="text-gray-700 max-w-2xl mx-auto">
                    {programsData.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                  {(() => { console.log('Published programs:', publishedPrograms); return null; })()}
                  {publishedPrograms && publishedPrograms.length > 0 ? (
                    publishedPrograms.map((program, idx) => {
                      const Icon = iconMap[program.icon] || BookOpen;
                      return (
                        <Card key={program.id || idx} className="flex flex-col h-full w-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                          <CardHeader className="text-center pb-4">
                            <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                              {Icon && <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />}
                            </div>
                            <CardTitle className="text-xl text-slate-800 mb-2">{program.title}</CardTitle>
                            <div className="flex justify-center space-x-4 text-sm mb-2">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{program.duration}</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{program.level}</span>
                            </div>
                          </CardHeader>
                          <CardContent className="flex flex-col flex-grow">
                            <CardDescription className="text-slate-600 leading-relaxed mb-6">
                              {program.description}
                            </CardDescription>
                            <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium mt-auto" tabIndex={-1} style={{ pointerEvents: 'none' }}>
                              Մանրամասն
                            </button>
                          </CardContent>
                        </Card>
                      );
                    })
                  ) : (
                    <div className="col-span-full text-center text-gray-500">No programs to display. Check your API or data structure.</div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Configure display settings for the programs section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <Label>Active Section</Label>
              <p className="text-sm text-gray-500">
                Show this section on the website
              </p>
            </div>
            <Switch
              checked={programsData.isActive}
              onCheckedChange={(checked) => setProgramsData({ ...programsData, isActive: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
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
  );
};

export default AdminProgramsEditor; 