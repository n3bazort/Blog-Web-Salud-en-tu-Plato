import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../lib/firebase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  //Función para obtener todas las tablas de 'blogs'
  if (req.method === 'GET') {
    try {
      const blogsCollection = collection(db, 'blogs')
      const blogSnapshot = await getDocs(blogsCollection)
      const blogs = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      res.status(200).json(blogs)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los blogs' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}