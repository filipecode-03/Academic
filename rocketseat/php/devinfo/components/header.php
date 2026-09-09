<?php

$technologies = [
    [
        'name' => 'Github',
        'bg' => '#82BC4F',
    ],
    [
        'name' => 'PHP',
        'bg' => '#BB72E8',
    ],
    [
        'name' => 'CSS',
        'bg' => '#3996DB',
    ],
    [
        'name' => 'HTML',
        'bg' => '#E3646E',
    ],
    [
        'name' => 'JavaScript',
        'bg' => '#EABD5F',
    ],
];

?>

<header class="bg-[url('../img/Background_Intro.png')] text-white text-center pt-[120px] px-40.75 pb-[128px] bg-cover bg-center bg-no-repeat">
    <section>
        <div class='w-170 mx-auto'>
            <img src="../img/profile.png" alt="profile" class='border-3 mx-auto border-[#E3646E] p-1 rounded-full' />
            <h2 class='mt-10 font-[Inconsolata] text-[20px] text-[#C0C4CE]'>Hello World! Meu nome é <span class='text-[#E3646E]'>Martina Santos</span> e sou</h2>
            <h1 class="font-['Asap'] font-bold text-[56px]">Desenvolvedora PHP</h1>
            <p class='font-[Maven_Pro] text-[14px] text-[#878EA1]'>Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
        </div>
    </section>
    <section class="flex justify-center gap-4 mt-[80px]">
        <?php foreach ($technologies as $technology): ?>
            <div
                class="px-4 py-2 rounded-full text-sm text-black font-medium"
                style="background-color: <?= $technology['bg'] ?>"
            >
                <?= $technology['name'] ?>
            </div>
        <?php endforeach; ?>
    </section>
</header>