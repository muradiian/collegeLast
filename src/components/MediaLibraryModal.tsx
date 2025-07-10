import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Image, 
  Search, 
  X,
  Check
} from 'lucide-react';

interface MediaFile {
  id: number;
  name: string;
  type: 'image' | 'document';
  size: string;
  url: string;
  uploadedAt: string;
  dimensions?: string;
}

interface MediaLibraryModalProps {
  onSelect: (url: string) => void;
  trigger: React.ReactNode;
}

const MediaLibraryModal = ({ onSelect, trigger }: MediaLibraryModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Sample media files - in a real app, this would come from your actual media library
  const mediaFiles: MediaFile[] = [
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
    },
    {
      id: 3,
      name: 'hero-background.jpg',
      type: 'image',
      size: '1.2MB',
      url: '/images/hero-background.jpg',
      uploadedAt: '2024-01-12',
      dimensions: '1920x1080'
    }
  ];

  const filteredFiles = mediaFiles.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) && file.type === 'image'
  );

  const handleSelect = () => {
    if (selectedFile) {
      onSelect(selectedFile.url);
      setIsOpen(false);
      setSelectedFile(null);
      setSearchTerm('');
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setSelectedFile(null);
    setSearchTerm('');
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSelectedFile(null);
      setSearchTerm('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Image className="h-5 w-5" />
            <span>Choose from Media Library</span>
          </DialogTitle>
          <DialogDescription>
            Select an image from your media library to use as the background.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className={`relative border-2 rounded-lg p-2 cursor-pointer transition-all ${
                  selectedFile?.id === file.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedFile(file)}
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                  <Image className="h-8 w-8 text-gray-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{file.size}</span>
                    {file.dimensions && <span>{file.dimensions}</span>}
                  </div>
                </div>
                {selectedFile?.id === file.id && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-blue-500 text-white rounded-full p-1">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFiles.length === 0 && (
            <div className="text-center py-8">
              <Image className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No images found</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button 
              onClick={handleSelect}
              disabled={!selectedFile}
            >
              Select Image
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaLibraryModal; 