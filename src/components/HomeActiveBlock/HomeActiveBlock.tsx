import CardBlock from "../CardBlock/CardBlock";

type HomeActiveBlockProps = {
    dataCards: any[];
};

const HomeActiveBlock = ({ dataCards }: HomeActiveBlockProps) => {
    return (
        <div className="px-4">
            <h1 className="flex text-primary-1 text-[24px] ml-right mt-6">Активные</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 border-t pt-8 place-items-start">
                {dataCards?.filter(item => item.status === 'active').map((item, index)=>(
                    <CardBlock key={index} itemCard={item}/>
                ))}
            </div>
        </div>
    )
}

export default HomeActiveBlock;