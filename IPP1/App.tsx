import { FileText, Search, BookOpen, Users, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const currentIssue = {
    volume: "15",
    issue: "1",
    year: "2026",
    articles: [
      { title: "Machine Learning Applications in Data Science", authors: "Ahmed M. Al-Rashid, Sarah Johnson", pages: "1-15" },
      { title: "Cloud Computing Security Framework", authors: "Mohammad Abdullah, Lisa Chen", pages: "16-28" },
      { title: "Artificial Intelligence in Healthcare Systems", authors: "Dr. Fatima Hassan, John Smith", pages: "29-45" },
    ]
  };

  const announcements = [
    { date: "February 1, 2026", text: "Call for Papers - Volume 15, Issue 2 (2026)" },
    { date: "January 15, 2026", text: "New Editorial Board Members Announced" },
    { date: "December 20, 2025", text: "Special Issue on Cybersecurity - Submissions Open" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              ijasca@zuj.edu.jo
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +962-5-390-0000
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-blue-800">
              Login
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-blue-800">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-900 rounded flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  International Journal of Applied Science and Computer Applications
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Al-Zaytoonah University of Jordan
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              About
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              Editorial Board
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              Current Issue
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              Archives
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              For Authors
            </Button>
            <Button variant="ghost" className="text-white hover:bg-blue-700 rounded-none px-6 py-6">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Image */}
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606996704899-fa6204d20c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHVuaXZlcnNpdHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NzAyMDY4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="University Building"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Welcome Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Welcome to IJASCA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The International Journal of Applied Science and Computer Applications (IJASCA) is a peer-reviewed, 
                    open access journal that publishes original research articles, review articles, and case studies in 
                    all areas of applied sciences and computer applications.
                  </p>
                  <p className="text-gray-700">
                    Our journal aims to provide a platform for researchers, academicians, and practitioners to share 
                    their research findings and contribute to the advancement of knowledge in the fields of computer 
                    science, information technology, and applied sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Open Access</h4>
                        <p className="text-sm text-gray-600">Free access to all published articles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Search className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Peer Reviewed</h4>
                        <p className="text-sm text-gray-600">Rigorous double-blind review process</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Indexed</h4>
                        <p className="text-sm text-gray-600">Indexed in major databases</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">International</h4>
                        <p className="text-sm text-gray-600">Global network of researchers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Issue */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Issue</CardTitle>
                  <CardDescription>
                    Volume {currentIssue.volume}, Issue {currentIssue.issue} ({currentIssue.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentIssue.articles.map((article, index) => (
                      <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                        <h4 className="font-semibold text-gray-900 hover:text-blue-900 cursor-pointer">
                          {article.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{article.authors}</p>
                        <p className="text-sm text-gray-500 mt-1">Pages: {article.pages}</p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">Abstract</Button>
                          <Button variant="outline" size="sm">PDF</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Journal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded"
                    />
                    <Button size="icon" className="bg-blue-900 hover:bg-blue-800">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="link" className="w-full justify-start text-blue-900 px-0">
                      → Submit Article
                    </Button>
                    <Button variant="link" className="w-full justify-start text-blue-900 px-0">
                      → Author Guidelines
                    </Button>
                    <Button variant="link" className="w-full justify-start text-blue-900 px-0">
                      → Review Process
                    </Button>
                    <Button variant="link" className="w-full justify-start text-blue-900 px-0">
                      → Publication Ethics
                    </Button>
                    <Button variant="link" className="w-full justify-start text-blue-900 px-0">
                      → Article Processing Charges
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="text-sm">
                        <p className="text-gray-500">{announcement.date}</p>
                        <p className="text-gray-900 mt-1">{announcement.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Journal Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Journal Information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div>
                    <span className="font-semibold">ISSN:</span> 2706-6118 (Online)
                  </div>
                  <div>
                    <span className="font-semibold">Frequency:</span> Quarterly
                  </div>
                  <div>
                    <span className="font-semibold">Publisher:</span> Al-Zaytoonah University of Jordan
                  </div>
                  <div>
                    <span className="font-semibold">Language:</span> English
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565307961646-5269939b5b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Library and Research"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About IJASCA</h3>
              <p className="text-sm text-blue-100">
                The International Journal of Applied Science and Computer Applications is published by 
                Al-Zaytoonah University of Jordan, promoting excellence in research and innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-blue-100">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Al-Zaytoonah University of Jordan<br />Amman, Jordan</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  ijasca@zuj.edu.jo
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +962-5-390-0000
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Important Links</h3>
              <div className="space-y-2 text-sm text-blue-100">
                <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
                <p className="hover:text-white cursor-pointer">Copyright Notice</p>
                <p className="hover:text-white cursor-pointer">Open Access Policy</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm text-blue-100">
            <p>© 2026 Al-Zaytoonah University of Jordan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
