import Head from 'next/head';

const Meta = ({ title, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="keywords" content={keywords} />
  </Head>
);

Meta.defaultProps = {
  title: 'Ninja List',
  keywords: 'ninjas',
};

export default Meta;
