import fs from 'fs-extra';
import matter from 'gray-matter';
import { CardTemplate } from '../components/cardTemplate';

export async function getStaticProps() {
    // Get all our posts
    const files = fs.readdirSync('post');
    const posts = files.map((fileName) => {
        // console.log(fileName)
        const a="---\ntitle: Hello\nslug: home\n---\n<h1>Hello world!</h1>"

        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`post/${fileName}`, 'utf-8');
        // const from = matter(a);
        console.log(readFile)
        const { data: frontmatter } = matter(readFile);
        console.log(frontmatter)
        // console.log(a)

        return {
        slug,
        frontmatter,
        };

    });
    return {
        props: {
        posts,
        },
    };
}

export default function Home({ posts }) {
    return (
    <div className=''>
        {posts.map(({ slug, frontmatter }) => 
        {
            return (
                <>
                <div key={slug}>
                    {<CardTemplate likes={4} imgurl={`${frontmatter.image}`}/>}
                </div>
                
                </>
                
            )}
        
        // (
        // <div
        //     key={slug}
        //     className=''
        // >
        //     <Link href={`/post/${slug}`}>
        //     <a>
        //         <Image
        //         width={650}
        //         height={340}
        //         alt={frontmatter.title}
        //         src={`${frontmatter.socialImage}`}
        //         />
        //         <h1 className='p-4'>{frontmatter.title}</h1>
        //     </a>
        //     </Link>
        // </div>
        
        // )
        )}
    </div>
    );
}