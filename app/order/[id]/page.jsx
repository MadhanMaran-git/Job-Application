export default async function OrderDetails({params}){
   const {id} = await params;
   return(
      <>
      <h1>this is order {id}</h1>
      </>
   )
}