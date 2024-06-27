import Logo from '../../assets/image/logo.png';

export default function Footer() {
    return (
        <section className="h-[250px] max-w-full my-[25px] bg-[#595959]">
            <img src={Logo} className='w-[187px] mx-[162px] py-[26px]' alt="Logo" />
        </section>
    )
}