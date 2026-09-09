
<?php

$socials = [
    [
        'name' => 'LinkedIn',
        'icon' => 'fa-brands fa-linkedin',
        'family' => 'brands',
        'url' => '#',
    ],
    [
        'name' => 'Instagram',
        'icon' => 'fa-brands fa-instagram',
        'family' => 'brands',
        'url' => '#',
    ],
    [
        'name' => 'GitHub',
        'icon' => 'fa-brands fa-github',
        'family' => 'brands',
        'url' => '#',
    ],
    [
        'name' => 'E-mail',
        'icon' => 'fa-solid fa-envelope',
        'family' => 'classic',
        'url' => 'mailto:email@example.com',
    ],
];

?>

<footer class="px-[120px] pb-[200px] pt-[128px] bg-[url('../img/Background_Contacts.png')] bg-cover bg-center bg-no-repeat">

    <section class="text-center flex flex-col gap-2">
        <h2 class='font-["Inconsolata"] text-[20px] text-[#BB72E9]'>
            Contato
        </h2>

        <h3 class='text-white text-[24px] font-["Asap"] font-bold'>
            Gostou do meu trabalho
        </h3>

        <p class='font-[Maven_Pro] text-[#878EA1]'>
            Entre em contato ou acompanhe as minhas redes sociais!
        </p>
    </section>

    <section class="flex flex-col items-center gap-4 mt-12">

        <?php foreach ($socials as $social): ?>
            <a
                href="<?= $social['url'] ?>"
                class="w-[400px] h-[68px] px-6 bg-[#292C34] rounded-lg flex items-center gap-4"
            >
                <i class="<?= $social['icon'] ?> text-gray-300 text-xl"></i>

                <span class="font-['Maven_Pro'] text-[16px] text-gray-300">
                    <?= $social['name'] ?>
                </span>

                <i class="fa-solid fa-arrow-up-right-from-square text-blue-500 ml-auto"></i>
            </a>
        <?php endforeach; ?>

    </section>

</footer>