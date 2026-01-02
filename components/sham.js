"use client";
export default function Sham(props){
    return(
        <>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.handsome ? 'he is handsome' : 'kir'}</h1>
        </>

    )

}