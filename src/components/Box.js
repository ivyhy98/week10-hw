export default function Box(props){
    return(
        <div className="box">
            <h3>{props.title}</h3>
            <h2 className="subtitle">{props.result}</h2>

        </div>
    );
};