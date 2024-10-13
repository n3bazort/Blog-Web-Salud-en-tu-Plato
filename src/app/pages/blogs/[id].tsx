import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      if (id) {
        const blogDoc = doc(db, 'blogs', id as string);
        const blogSnapshot = await getDoc(blogDoc);
        if (blogSnapshot.exists()) {
          setBlog({ id: blogSnapshot.id, ...blogSnapshot.data() });
        }
      }
    }
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Cargando...</div>;

  return (
    // Renderiza tu blog individual aquí
  );
}