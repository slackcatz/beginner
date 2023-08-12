export default function Button(props) {
  return (
    <>
      <button className="btn bg-clr-1 text-clr-4 hover:bg-clr-2">
        {props.title}
      </button>
    </>
  );
}
