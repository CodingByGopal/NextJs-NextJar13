const SingleUser = ({ params }) => {
  return <div>user</div>;
};

export default SingleUser;

export function generateStaticParams() {
  const data = use(fetchData(`https://jsonplaceholder.typicode.com/users`));
  return data.map((item) => ({ userId: item.id.toString() }));
}
