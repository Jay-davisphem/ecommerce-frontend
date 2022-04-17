function Input(props) {
  const styleStr =
    "mb-4 shadow appearance-none border border-grey rounded w-full py-2 px-3 text-blue leading-tight focus:outline-none focus:border-2 hover:border-bluehover:scale-110 duration-700 transition ease-out transform focus:scale-110";
  return (
    <>
      {props.large ? (
        <textarea
          className={styleStr}
          id={props.idVal}
          rows={3}
          placeholder={props.placeholder}
          {...props}
        ></textarea>
      ) : (
        <input
          className={styleStr}
          id={props.idVal}
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder}
          {...props}
        />
      )}
    </>
  );
}
export default Input;
