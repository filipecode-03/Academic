<?php

$projects = [
    [
        'image' => '../img/imageCard01.png',
        'title' => 'Travelgram',
        'description' => 'Rede social onde as pessoas mostram os registros de suas viagens pelo mundo',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
    [
        'image' => '../img/imageCard02.png',
        'title' => 'Página de Receita',
        'description' => 'Página com o passo a passo de uma receita para cupcakes',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
    [
        'image' => '../img/imageCard03.png',
        'title' => 'Tech News',
        'description' => 'Homepage de um portal de notícias sobre a área de tecnologia',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
    [
        'image' => '../img/imageCard04.png',
        'title' => 'Refund',
        'description' => 'Um sistema para pedido e acompanhamento de reembolso',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
    [
        'image' => '../img/imageCard06.png',
        'title' => 'Página de turismo',
        'description' => 'Página com as principais informações para quem quer viajar para Busan',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
    [
        'image' => '../img/imageCard05.png',
        'title' => 'Zingen',
        'description' => 'Landing Page completa e responsiva de um aplicativo de Karaokê',
        'technologies' => [
            ['name' => 'PHP', 'bg' => '#BB72E8'],
            ['name' => 'CSS', 'bg' => '#3996DB'],
            ['name' => 'HTML', 'bg' => '#E3646E'],
            ['name' => 'JavaScript', 'bg' => '#EABD5F'],
        ],
    ],
];
?>

<section class="pt-[70px] px-[120px] pb-[144px]">
    <section class='text-center'>
        <h2 class='font-["Inconsolata"] text-[20px] text-[#E3646E]'>Meu Trabalho</h2>
        <h3 class='text-white text-[24px] font-["Asap"] font-bold'>Veja os projetos em destaque</h3>
    </section>
    <section class="grid grid-cols-2 gap-6 mt-14 w-[1100px] mx-auto">
        <?php foreach ($projects as $project): ?>
            <article class="bg-[#292C34] rounded-xl p-3 flex gap-5">
                
                <img
                    src="<?= $project['image'] ?>"
                    alt="<?= $project['title'] ?>"
                    class="w-[224px] h-[156px] object-cover rounded-lg shrink-0"
                >

                <div class="flex flex-col justify-between p-1">
                    
                    <!-- Título e descrição -->
                    <div>
                        <h4 class="text-white font-['Asap'] font-bold text-[18px]">
                            <?= $project['title'] ?>
                        </h4>

                        <p class="text-[#C0C4CE] font-['Maven_Pro'] text-[14px] w-[90%] leading-[1.4] mt-2">
                            <?= $project['description'] ?>
                        </p>
                    </div>

                    <!-- Tecnologias -->
                    <div class="flex flex-wrap gap-2">
                        <?php foreach ($project['technologies'] as $technology): ?>
                            <span
                                class="px-3 py-1 rounded-full text-black text-xs font-medium"
                                style="background-color: <?= $technology['bg'] ?>"
                            >
                                <?= $technology['name'] ?>
                            </span>
                        <?php endforeach; ?>
                    </div>

                </div>
            </article>
        <?php endforeach; ?>
    </section>
</section>