import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  Users, 
  LogOut,
  Menu,
  X,
  Home,
  GraduationCap,
  Phone,
  Info
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    toast({
      title: 'Ելք',
      description: 'Դուք հաջողությամբ դուրս եկաք համակարգից',
    });
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Վահանակ', path: '/admin/dashboard' },
    { icon: FileText, label: 'Բովանդակության կառավարում', path: '/admin/content' },
    { icon: Image, label: 'Մեդիա գրադարան', path: '/admin/media' },
    { icon: Home, label: 'Գլխավոր էջ', path: '/admin/hero' },
    { icon: Info, label: 'Մեր մասին էջ', path: '/admin/about' },
    { icon: GraduationCap, label: 'Ծրագրերի էջ', path: '/admin/programs' },
    { icon: Users, label: 'Ընդունելության էջ', path: '/admin/admissions' },
    { icon: Phone, label: 'Կապի էջ', path: '/admin/contact' },
    { icon: Settings, label: 'Կարգավորումներ', path: '/admin/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">Ադմինիստրատորի վահանակ</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.path}
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className={`w-full justify-start bg-blue-600 text-white font-medium bg-opacity-100 transition-colors duration-150 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-white shadow-sm hover:shadow-md ${
                    isActive(item.path) ? 'bg-blue-600 text-white' : ''
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Ելք
            </Button>
            <div className="mt-6 text-xs text-gray-400 text-center select-none">
              © {new Date().getFullYear()} Էրեբունի Պետական Հումանիտար-Տեխնիկական Քոլեջ<br/>
              Բոլոր իրավունքները պաշտպանված են
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-80">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Բարի գալուստ, ադմինիստրատոր
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
              >
                Դիտել կայքը
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 