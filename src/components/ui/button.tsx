export const Button = ({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled: boolean }) => {
    return (
        <button className="transition-colors duration-300 ease-in-out bg-primary-1 text-primary-6 px-4 py-2 rounded-[50px] text-[16px] font-600 w-[170px] h-[46px] mt-6 mr-auto cursor-pointer hover:bg-primary-5 hover:text-primary-2 disabled:opacity-50 disabled:cursor-not-allowed" onClick={onClick} disabled={disabled} >
            {children}
        </button>
    )
}