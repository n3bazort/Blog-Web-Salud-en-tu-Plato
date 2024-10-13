import { useState, useEffect } from 'react'
import Link from "next/link"
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Play } from "lucide-react"

export default function HomePage() {
  // COMENTARIO: Estos estados y el useEffect deben descomentarse cuando se conecte a Firebase
  /*
  const [featuredBlogs, setFeaturedBlogs] = useState([])
  const [recentBlogs, setRecentBlogs] = useState([])
  const [conferenceVideos, setConferenceVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // Fetch featured blogs
      const featuredQuery = query(collection(db, 'articles'), where('featured', '==', true), limit(3));
      const featuredSnapshot = await getDocs(featuredQuery);
      setFeaturedBlogs(featuredSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Fetch recent blogs
      const recentQuery = query(collection(db, 'articles'), orderBy('createdAt', 'desc'), limit(3));
      const recentSnapshot = await getDocs(recentQuery);
      setRecentBlogs(recentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Fetch conference videos
      const videosQuery = query(collection(db, 'videos'), limit(3));
      const videosSnapshot = await getDocs(videosQuery);
      setConferenceVideos(videosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchData();
  }, []);
  */

  // COMENTARIO: Estos datos de ejemplo deben eliminarse cuando se conecte a Firebase
  const featuredBlogs = [
    { id: 1, title: "10 Súper Alimentos para Aumentar tu Energía", image: "/placeholder.svg?height=200&width=300", author: "Josue Bazurto" },
    { id: 2, title: "Guía Completa de la Dieta Mediterránea", image: "/placeholder.svg?height=200&width=300", author: "María López" },
    { id: 3, title: "Recetas Saludables para Desayunos Rápidos", image: "/placeholder.svg?height=200&width=300", author: "Carlos Ruiz" },
  ];

  const recentBlogs = [
    { id: 4, title: "Beneficios de los Frutos Secos en tu Dieta", date: "2023-04-15", image: "/placeholder.svg?height=150&width=250", author: "Ana Martínez" },
    { id: 5, title: "Cómo Incorporar más Verduras en tus Comidas", date: "2023-04-10", image: "/placeholder.svg?height=150&width=250", author: "Pedro Sánchez" },
    { id: 6, title: "La Importancia de la Hidratación para la Salud", date: "2023-04-05", image: "/placeholder.svg?height=150&width=250", author: "Laura Gómez" },
  ];

  const conferenceVideos = [
    { id: 1, title: "Nutrición y Longevidad", thumbnail: "/placeholder.svg?height=150&width=250", duration: "45:30" },
    { id: 2, title: "El Impacto del Sueño en la Salud", thumbnail: "/placeholder.svg?height=150&width=250", duration: "38:15" },
    { id: 3, title: "Estrategias para una Vida Activa", thumbnail: "/placeholder.svg?height=150&width=250", duration: "52:00" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2" />
              Blog SaludableYes
            </Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:underline">Quiénes Somos</Link>
              <Link href="/contact" className="hover:underline">Contacto</Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a HiBlog Saludable</h1>
          <p className="text-xl mb-8">Tu fuente de información sobre alimentación saludable, bienestar y estilo de vida activo</p>
          <p className="text-lg mb-8">Descubre artículos, recetas y consejos de expertos para mejorar tu salud y calidad de vida</p>
          <Button size="lg" variant="secondary">
            Explora Nuestro Contenido
          </Button>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Blogs Destacados</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {featuredBlogs.map((blog) => (
                <CarouselItem key={blog.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-4">
                      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-4 rounded" />
                      <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                      <p className="text-right font-bold mb-2">Por {blog.author}</p>
                      <Button variant="link" className="p-0">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="mt-6 text-center">
            <Link href="/blogs">
              <Button>
                Ver más artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Blogs Recientes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogs.map((blog) => (
              <Card key={blog.id}>
                <CardContent className="p-4">
                  <img src={blog.image} alt={blog.title} className="w-full h-32 object-cover mb-4 rounded" />
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <p className="text-right font-bold mb-2">Por {blog.author}</p>
                  <p className="text-sm text-muted-foreground mb-4">Publicado el {blog.date}</p>
                  <Button variant="outline">
                    Leer artículo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/blogs">
              <Button>
                Ver más artículos recientes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conferencias sobre Salud</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conferenceVideos.map((video) => (
              <Card key={video.id}>
                <CardContent className="p-4">
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-32 object-cover mb-4 rounded" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-75" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Duración: {video.duration}</p>
                  <Button variant="outline">
                    Ver conferencia
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/conferencias">
              <Button>
                Ver todas las conferencias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 Blog Saludable. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}