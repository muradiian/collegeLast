import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Image, 
  File, 
  Trash2, 
  Download,
  Copy,
  Search,
  Filter
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminMediaLibrary = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const [mediaFiles, setMediaFiles] = useState([
    {
      id: 1,
      name: 'ephtqVector-logo.png',
      type: 'image',
      size: '262KB',
      url: '/src/assets/vectors/ephtqVector-logo.png',
      uploadedAt: '2024-01-15',
      dimensions: '1008x1008'
    },
    {
      id: 2,
      name: 'placeholder.svg',
      type: 'image',
      size: '3.2KB',
      url: '/public/placeholder.svg',
      uploadedAt: '2024-01-10',
      dimensions: '400x300'
    }
  ]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Simulate file upload
      const newFiles = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        size: `${(file.size / 1024).toFixed(1)}KB`,
        url: URL.createObjectURL(file),
        uploadedAt: new Date().toISOString().split('T')[0],
        dimensions: file.type.startsWith('image/') ? 'Unknown' : undefined
      }));
      
      setMediaFiles([...mediaFiles, ...newFiles]);
      toast({
        title: 'Files uploaded',
        description: `${files.length} file(s) uploaded successfully.`,
      });
    }
  };

  const handleDelete = (id: number) => {
    setMediaFiles(mediaFiles.filter(file => file.id !== id));
    toast({
      title: 'File deleted',
      description: 'The file has been deleted successfully.',
    });
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'URL copied',
      description: 'File URL copied to clipboard.',
    });
  };

  const handleDownload = (file: any) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: 'Download started',
      description: `${file.name} is being downloaded.`,
    });
  };

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || file.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Media Library</h1>
        <p className="text-gray-600 mt-2">
          Manage your website images, documents, and media files.
        </p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Media</CardTitle>
          <CardDescription>
            Upload new images, documents, or other media files.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drop files here or click to upload
            </h3>
            <p className="text-gray-500 mb-4">
              Support for JPG, PNG, SVG, PDF, and other common formats
            </p>
            <Input
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleUpload}
              className="hidden"
              id="file-upload"
            />
            <Button asChild>
              <label htmlFor="file-upload">
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </label>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </Button>
          <Button
            variant={selectedFilter === 'image' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('image')}
          >
            Images
          </Button>
          <Button
            variant={selectedFilter === 'document' ? 'default' : 'outline'}
            onClick={() => setSelectedFilter('document')}
          >
            Documents
          </Button>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredFiles.map((file) => (
          <Card key={file.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {file.type === 'image' ? (
                  file.url ? (
                    <img src={file.url} alt={file.name} className="object-contain max-h-full max-w-full" />
                  ) : (
                    <Image className="h-12 w-12 text-gray-400" />
                  )
                ) : (
                  <File className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-sm truncate">{file.name}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{file.size}</span>
                  <span>{file.dimensions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {file.type}
                  </Badge>
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopyUrl(file.url)}
                      title="Copy URL"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(file)}
                      title="Download"
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(file.id)}
                      title="Delete"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFiles.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <File className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No files found</h3>
            <p className="text-gray-500">
              {searchTerm ? 'Try adjusting your search terms.' : 'Upload your first file to get started.'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminMediaLibrary; 