function Input(props) {
  const styleStr =
    "mb-4 shadow appearance-none border border-grey rounded w-full py-2 px-3 text-blue leading-tight focus:outline-none focus:border-2 hover:border-bluehover:scale-110 duration-700 transition ease-out transform focus:scale-110";
  const textarea = (
    <textarea
      className={styleStr}
      id={props.id}
      rows={3}
      placeholder={props.placeholder}
      {...props}
    ></textarea>
  );

  const input = (
    <input
      className={styleStr}
      id={props.id}
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder}
      label={props.label}
      required
      {...props}
    />
  );
  return (
    <>
      {props.label ? (
        <label htmlFor={props.id} className="text-grey italic lowercase">
          {props.placeholder} {props.large ? textarea : input}
        </label>
      ) : props.large ? (
        textarea
      ) : (
        input
      )}
    </>
  );
}
export default Input;
