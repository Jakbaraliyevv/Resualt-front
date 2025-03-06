import megic1 from "../../../assets/magicSinema.png";
import megic2 from "../../../assets/magicSinema2.png";

function TeaterComponentsChild() {
  return (
    <section className="w-[90%] m-auto">
      <div className="py-[30px]">
        <h1 className="text-[37px] font-bold text-[#000]">О кинотеатре</h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-[20px] ">
        <img src={megic1} alt="" />
        <img src={megic2} alt="" />
        <p className="text-[#414141] text-[16px] font-normal">
          Сложно удивить современного кинозрителя. Для него важно не только
          смотреть кино, но и ощутить полное погружение в ту или иную историю
          киноленты. Качество изображения и звука в совокупности играет
          немаловажную роль, чтобы искушенный зритель оторвался от онлайн
          просмотров и посетил кинотеатр. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet unde autem voluptatem veniam accusamus modi
          debitis odit, non excepturi aspernatur sunt sapiente impedit eaque
          quisquam eius dignissimos iste saepe ipsam.
        </p>
      </div>

      <div className="mt-[50px] flex flex-col gap-[40px] text-[#414141] text-[24px] font-medium">
        <p>
          Теперь каждый из вас может открыть для себя новые возможности при
          просмотре кино через призму передовых технологий. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, explicabo alias. Quis, voluptatem similique ipsa ab dignissimos nisi adipisci saepe suscipit autem quaerat tenetur molestiae esse. Voluptatum in sed perspiciatis?
        </p>
        <p>
          Magic Cinema – первый в Узбекистане лазерный кинотеатр с системой
          звука Dolby Digital, являющейся скачком в мире кинотехнологий.
          Насыщенное, яркое и четкое изображение в сочетании с кристальным
          звуком, все что нужно, чтобы зритель стал частью событий, погрузился в
          волшебные миры и испытывал все эмоции главных героев фильма. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et assumenda consequuntur mollitia exercitationem non ducimus, eum impedit voluptatem autem ut tempora, iste deserunt rem amet distinctio eius ipsa dolorem.
        </p>
        <p>
          Первый лазерный кинотеатр Magic Cinema, включает в себя 6 залов со
          вместимостью 430 человек. Каждый ценитель кино, от мала до велика,
          найдет то, что по душе именно ему.
        </p>
        Кино должно заставить забыть зрителя о том, что он сидит в кино, что
        осуществимо в Magic Cinema! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus fugiat alias ipsa magnam in asperiores impedit enim cupiditate quidem numquam nisi quia molestiae debitis repudiandae quam, similique eligendi ipsam non?
      </div>
    </section>
  );
}

export default TeaterComponentsChild;
