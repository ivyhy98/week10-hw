import Box from "./Box"

export default function Topbox() {
    const info = [{title: 'Reviews', result: 1281},{title: 'Average Rating', result: 4.6},{title: 'Sentiment Analysis', result: 960}]
    return(
        <div className="top-box">
            {info.map((obj)=>{
                return(
                    <Box title={obj.title} result={obj.result} />
                )
            })}
        </div>
    )
}
