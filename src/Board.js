export default function Board(props) {
    return (
        <div className={"board rounded-3"}>
            {props.captchaImages.map(el => <button key={el.id} onClick={() => props.clickImage(el.id)}><img src={el.src} width={130}/></button>)}
        </div>
    )
}