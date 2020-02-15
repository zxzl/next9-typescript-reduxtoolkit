import Link from 'next/link';

import Counter from 'src/components/counter'

const About = () => (
  <>
    <h1>Just another demo</h1>
    <Counter />
    <Link href="/"><a>back to home</a></Link>
  </>
);

export default About;
