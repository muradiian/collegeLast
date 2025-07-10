import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Auth from './Auth';
import UploadAndPost from './UploadAndPost';
import NotFound from "./pages/NotFound";
import AuthPage from './pages/AuthPage';
import CreatePostPage from './pages/CreatePostPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './components/AdminLayout';
import AdminGuard from './components/AdminGuard';
import AdminContentManagement from './pages/AdminContentManagement';
import AdminMediaLibrary from './pages/AdminMediaLibrary';
import AdminHeroEditor from './pages/AdminHeroEditor';
import AdminAboutEditor from './pages/AdminAboutEditor';
import AdminProgramsEditor from './pages/AdminProgramsEditor';
import AdminAdmissionsEditor from './pages/AdminAdmissionsEditor';
import AdminContactEditor from './pages/AdminContactEditor';
import AdminSettings from './pages/AdminSettings';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';

const queryClient = new QueryClient();

function AppWithHeader() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <AdminGuard>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/content" element={
          <AdminGuard>
            <AdminLayout>
              <AdminContentManagement />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/media" element={
          <AdminGuard>
            <AdminLayout>
              <AdminMediaLibrary />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/hero" element={
          <AdminGuard>
            <AdminLayout>
              <AdminHeroEditor />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/about" element={
          <AdminGuard>
            <AdminLayout>
              <AdminAboutEditor />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/programs" element={
          <AdminGuard>
            <AdminLayout>
              <AdminProgramsEditor />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/admissions" element={
          <AdminGuard>
            <AdminLayout>
              <AdminAdmissionsEditor />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/contact" element={
          <AdminGuard>
            <AdminLayout>
              <AdminContactEditor />
            </AdminLayout>
          </AdminGuard>
        } />
        <Route path="/admin/settings" element={
          <AdminGuard>
            <AdminLayout>
              <AdminSettings />
            </AdminLayout>
          </AdminGuard>
        } />
      </Routes>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWithHeader />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
