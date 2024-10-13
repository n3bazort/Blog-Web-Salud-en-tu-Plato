import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Blog {
  id: string
  title: string
  content: string
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('/api/blogs')
      if (response.ok) {
        const data = await response.json()
        setBlogs(data)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content.substring(0, 100)}...</p>
              <Button>Leer más</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}