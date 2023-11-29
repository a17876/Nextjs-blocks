import { GetServerSideProps } from "next";

interface BlockDetailProps {
  block: {
    id: number;
    title: string;
    code: string;
  };
}

const BlockDetailPage: React.FC<BlockDetailProps> = ({ block }) => {
  if (!block) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    window.location.href = `/blocks/${block.id}/edit`;
  };

  return (
    <div>
      <h1>{block.title}</h1>
      <pre>{block.code}</pre>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlockDetailProps> = async ({ params }) => {
  const blockId = Number(params!.id);
  // Fetch data from your database or any other source
  const block = { id: blockId, title: "Sample Title", code: "Sample Code" };

  if (!block) {
    return {
      notFound: true,
    };
  }

  return {
    props: { block },
  };
};

export default BlockDetailPage;
