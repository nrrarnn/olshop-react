
const Card = ({children, styles}) => {
  return (
    <>
    <div className="w-full pb-20 flex justify-center mx-auto">
      <div className={`grid gap-8 px-10 ${styles}`}>
        {children}    
       </div>
    </div>
    </>
  )

}

export default Card;