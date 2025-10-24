import CardBlock from "../CardBlock/CardBlock";
import type { User } from '../../types/user';

type HomeArchiveBlockProps = {
    dataCards: User[];
};

const HomeArchiveBlock = ({ dataCards }: HomeArchiveBlockProps) => {
    return (
        <div className="mt-8 px-4">
            <h1 className="flex text-primary-1 text-[24px] ml-right mt-6">Архивные</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 border-t pt-8 place-items-start">
                {dataCards?.filter(item => item.status === 'archive').map((item, index)=>(
                    <CardBlock key={index} itemCard={item}/>
                ))}
            </div>
        </div>
    )
}

export default HomeArchiveBlock;