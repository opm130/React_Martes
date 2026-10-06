export default function Campos({label,entrada,input,holder}){
    return(
        <div>
            <label htmlFor={entrada}>{label}</label>
            <input type={input} id={entrada} name={entrada} placeholder={holder} />
        </div>
    )
}