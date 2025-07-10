import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Edit, 
  Plus, 
  Trash2, 
  Save,
  Eye,
  Calendar,
  User
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminContentManagement = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('pages');
  const [editingPage, setEditingPage] = useState<number | null>(null);
  const [editingPost, setEditingPost] = useState<number | null>(null);

  const [pages, setPages] = useState([
    {
      id: 1,
      title: 'Home Page',
      slug: '/',
      status: 'published',
      lastModified: '2024-01-15',
      author: 'Admin'
    },
    {
      id: 2,
      title: 'About Page',
      slug: '/about',
      status: 'draft',
      lastModified: '2024-01-10',
      author: 'Admin'
    }
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'New Programs Available',
      excerpt: 'Check out our latest educational programs...',
      status: 'published',
      date: '2024-01-15',
      author: 'Admin'
    }
  ]);

  const handleSave = () => {
    toast({
      title: 'Content saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  const handleDelete = (id: number, type: 'page' | 'post') => {
    if (type === 'page') {
      setPages(pages.filter(page => page.id !== id));
    } else {
      setPosts(posts.filter(post => post.id !== id));
    }
    toast({
      title: 'Item deleted',
      description: 'The item has been deleted successfully.',
    });
  };

  const handleAddPage = () => {
    const newPage = {
      id: Date.now(),
      title: 'New Page',
      slug: '/new-page',
      status: 'draft',
      lastModified: new Date().toISOString().split('T')[0],
      author: 'Admin'
    };
    setPages([...pages, newPage]);
    setEditingPage(newPage.id);
    toast({
      title: 'Page added',
      description: 'New page has been created.',
    });
  };

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: 'New Post',
      excerpt: 'Enter post excerpt...',
      status: 'draft',
      date: new Date().toISOString().split('T')[0],
      author: 'Admin'
    };
    setPosts([...posts, newPost]);
    setEditingPost(newPost.id);
    toast({
      title: 'Post added',
      description: 'New post has been created.',
    });
  };

  const updatePage = (id: number, field: string, value: string) => {
    setPages(pages.map(page => 
      page.id === id ? { ...page, [field]: value } : page
    ));
  };

  const updatePost = (id: number, field: string, value: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, [field]: value } : post
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Բովանդակության կառավարում</h1>
        <p className="text-gray-600 mt-2">
          Կառավարեք կայքի էջերը և գրառումները։
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 text-base">
          <TabsTrigger value="pages">Էջեր</TabsTrigger>
          <TabsTrigger value="posts">Գրառումներ</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Էջեր</CardTitle>
                  <CardDescription>
                    Կառավարեք կայքի էջերը և դրանց բովանդակությունը։
                  </CardDescription>
                </div>
                <Button onClick={handleAddPage}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ավելացնել էջ
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          {editingPage === page.id ? (
                            <Input
                              value={page.title}
                              onChange={e => updatePage(page.id, 'title', e.target.value)}
                              className="mb-2"
                            />
                          ) : (
                            <h3 className="font-medium">{page.title}</h3>
                          )}
                          <p className="text-sm text-gray-500">{page.slug}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                        {page.status === 'published' ? 'հրապարակված' : 'սևագիր'}
                      </Badge>
                      {editingPage === page.id ? (
                        <Button variant="outline" size="sm" onClick={() => { setEditingPage(null); handleSave(); }}>
                          <Save className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" onClick={() => setEditingPage(page.id)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm" onClick={() => handleDelete(page.id, 'page')}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Գրառումներ</CardTitle>
                  <CardDescription>
                    Կառավարեք բլոգի գրառումները և հոդվածները։
                  </CardDescription>
                </div>
                <Button onClick={handleAddPost}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ավելացնել գրառում
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          {editingPost === post.id ? (
                            <>
                              <Input
                                value={post.title}
                                onChange={e => updatePost(post.id, 'title', e.target.value)}
                                className="mb-2"
                              />
                              <Textarea
                                value={post.excerpt}
                                onChange={e => updatePost(post.id, 'excerpt', e.target.value)}
                                className="mb-2"
                              />
                            </>
                          ) : (
                            <>
                              <h3 className="font-medium">{post.title}</h3>
                              <p className="text-sm text-gray-500">{post.excerpt}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                        {post.status === 'published' ? 'հրապարակված' : 'սևագիր'}
                      </Badge>
                      {editingPost === post.id ? (
                        <Button variant="outline" size="sm" onClick={() => { setEditingPost(null); handleSave(); }}>
                          <Save className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" onClick={() => setEditingPost(post.id)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm" onClick={() => handleDelete(post.id, 'post')}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContentManagement; 