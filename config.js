require('dotenv').config();

module.exports = {
    // Token bota Discord
    TOKEN: process.env.TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    GUILD_ID: process.env.GUILD_ID,
    
    // ID kanałów
    CHANNELS: {
        TICKETS: '1364122198171713627', // id kanału od ticketów
        WELCOME: '1332783793337143318', // id kanału od powitań
        VERIFICATION: '1339616812525944916' // id kanału od weryfikacji
    },
    
    // ID kategorii
    CATEGORIES: {
        TICKETS: '1332433507779346523' //  id kategorii od ticketów (ogólna kategoria)
    },
    
    // ID ról
    ROLES: {
        ADMIN: '1335299417338675250', // Rola administracji - może przejmować tickety i omija automod
        PLAYER: '1332649633167446097', // Rola gracz nadawana automatycznie po wejściu
        VERIFIED: '1332649633167446097' // Rola zweryfikowany (może być ranga gracz)
    },
    
    // Ustawienia bota
    BOT: {
        NAME: '777CODE',
        STATUS: 'dnd', // online, idle, dnd, invisible
        ACTIVITY_TYPE: 5, // 0=Playing, 1=Streaming, 2=Listening, 3=Watching, 5=Competing
        FOOTER_TEXT: '© 2025 WinterMC'
    },
    
    // Ustawienia ticketów
    TICKETS: {
        COOLDOWN: 60000, // = 60 sekund
        CATEGORIES: [
            { 
                label: 'Znalazłem błąd', 
                value: 'Znalazłem błąd', 
                emoji: { name: 'plik', id: '1346130150173184010' }, 
                description: 'Jeśli znalazłeś błąd wybierz te kategorię' 
            },
            { 
                label: 'Discord WinterMC', 
                value: 'Discord WinterMC', 
                emoji: { name: 'plik', id: '1346130179755479121' }, 
                description: 'Wybierz jeśli masz problem z discordem' 
            },
            { 
                label: 'Chcę otrzymać backupa', 
                value: 'Chcę otrzymać backupa', 
                emoji: { name: 'plik', id: '1346130170565627954' }, 
                description: 'Wybierz jeśli chcesz otrzymać backupa' 
            },
            { 
                label: 'Pytania Ogólne', 
                value: 'Pytania Ogólne', 
                emoji: { name: 'plik', id: '1346130168737038417' }, 
                description: 'Wybierz jeśli masz problem z innym problemem' 
            },
            { 
                label: 'Problem z itemshopem', 
                value: 'Problem z itemshopem', 
                emoji: { name: 'plik', id: '1346130153021112414' }, 
                description: 'Wybierz jeśli masz problem z itemshopem' 
            }
        ],
        MANAGEMENT_OPTIONS: [
            { 
                label: 'Zamknij ticket', 
                value: 'close_ticket', 
                emoji: '<:1346130179755479121:1371412002299445348>',
                description: 'Zamyka ticket i usuwa kanał' 
            },
            { 
                label: 'Przejmij ticket', 
                value: 'claim_ticket', 
                emoji: '<:1346130168737038417:1371411852478906501>',
                description: 'Przejmij ticket jako administrator' 
            },
            { 
                label: 'Opuść ticket', 
                value: 'unclaim_ticket', 
                emoji: '<:1346130161002741822:1371411931067449434>',
                description: 'Opuść przejęty ticket' 
            }
        ]
    },
    
    // Ustawienia powitań | "\n" = nowa linijka
    WELCOME: {
        TITLE: 'Cześć, {user}!',
        DESCRIPTION: 'Jesteś `#{memberCount}` osobą na Discordzie `WinterMC.pl`! \nMamy nadzieję, że zostaniesz z nami na dłużej! \nBaw się dobrze!',
        COLOR: '#08baed',
        IMAGE: 'https://i.imgur.com/w5z4s3f.png',
        BUTTON_LABEL: '777CODE.pl - Powitania'
    },
    
    // Ustawienia embedów
    EMBEDS: {
        TICKET_PANEL: {
            TITLE: '**Informacje dotyczące Ticketów**',
            DESCRIPTION: '> Aby **utworzyć** nowy **ticket**, wybierz odpowiednią **kategorię**\n> dotyczącą twojego **problemu**.\n \n> Zabroniony jest spam i bezsensowne tickety. Grozi to **permamentnym banem** na discordzie.',
            COLOR: '#08baed',
            IMAGE: 'https://i.imgur.com/VUMW7BU.png'
        }
    },
    
    // Ustawienia intents
    INTENTS: [
        'Guilds',
        'GuildMessages', 
        'GuildMembers',
        'GuildPresences',
        'GuildVoiceStates',
        'MessageContent'
    ],
    
    PARTIALS: [
        'Message',
        'Channel',
        'Reaction'
    ],
    
    // Ustawienia automoda
    AUTOMOD: {
        BAD_WORDS: ['kurwa', 'chuj', 'pierdole', 'jebany', 'spierdalaj'],
        BLACKLISTED_WORDS: ['hejt', 'nienawiść', 'rasizm'],
        ALLOWED_DOMAINS: [
            'discord.com', 
            'youtube.com', 
            'github.com', 
            'tenor.com', 
            'giphy.com',
            'media.discordapp.net', 
            'cdn.discordapp.com'
        ],
        BLOCKED_LINKS: [
            'discord.gg',
            'discordapp.com/invite'
        ]
    },
    
    VERIFICATION: {
        TYPE: 'math',
        MATH: {
            OPERATIONS: ['+', '-'],
            MIN_NUMBER: 1,
            MAX_NUMBER: 15,
            MAX_RESULT: 15
        },
        EMBED: {
            TITLE: 'Weryfikacja',
            DESCRIPTION: 'Wybierz opcję z menu poniżej, aby przejść proces weryfikacji i odblokować pełny dostęp do serwera!',
            COLOR: '#08baed',
            IMAGE: 'https://i.imgur.com/w5z4s3f.png'
        },
        SELECT_MENU: {
            PLACEHOLDER: '🎫| Wybierz opcję weryfikacji',
            CUSTOM_ID: 'verification_type',
            OPTIONS: [
                {
                    label: 'Rozpocznij weryfikację',
                    value: 'start_verification',
                    emoji: '✅',
                    description: 'Kliknij aby rozpocząć proces weryfikacji'
                }
            ]
        },
        MODAL: {
            TITLE: 'Weryfikacja',
            CUSTOM_ID: 'verificationModal',
            INPUT_LABEL: 'Podaj wynik działania',
            PLACEHOLDER: 'Wpisz odpowiedź...'
        },
        MESSAGES: {
            SUCCESS: 'Pomyślnie zweryfikowano konto!',
            ERROR: 'Niepoprawna odpowiedź!',
            ROLE_ERROR: 'Nie udało się znaleźć roli.',
            SENT: 'Wiadomość weryfikacyjna została wysłana.',
            SEND_ERROR: 'Błąd przy wysyłaniu wiadomości:',
            MODAL_ERROR: 'Błąd przy wyświetlaniu formularza:',
            CHANNEL_ERROR: 'Nie znaleziono kanału weryfikacyjnego'
        }
    },
    
    MESSAGES: {
        TICKET_CREATED: '<:1346130159220293705:1371412150974677062> Ticket utworzony! <#{channelId}>',
        TICKET_ERROR: 'Wystąpił błąd podczas tworzenia ticketa.',
        COOLDOWN: 'Musisz poczekać {time} sekund, zanim utworzysz kolejny ticket.',
        EXISTING_TICKET: 'Masz już otwarty ticket. Zamknij go, zanim utworzysz nowy.',
        NO_PERMISSION: 'Nie masz uprawnień do {action}!',
        CLOSING_TICKET: 'Zamykam ticket za 5 sekund...',
        TICKET_CLAIMED: 'Ticket został przejęty przez <@{userId}>.',
        TICKET_UNCLAIMED: '<@{userId}> opuścił ticketa',
        ROLE_ADDED: 'Rola {roleName} została nadana użytkownika {userTag}'
    },
    
    // Ustawienia logów
    LOGS: {
        BOT_READY: 'Bot zalogowany jako {tag}',
        BOT_ONLINE: 'Bot jest online jako {tag}',
        TICKET_CREATED: 'Ticket utworzony!',
        TICKET_DELETED: 'Stara wiadomość ticketów została usunięta.',
        TICKET_ERROR: 'Błąd w wysyłaniu wiadomości na kanał ticketów:',
        TICKET_SENT: 'Wiadomość z ticketami została wysłana.',
        MESSAGE_DELETED: 'Usunięto wiadomość od {tag} ({id}) | Treść: "{content}"',
        ROLE_ERROR: 'Błąd przy nadawaniu roli:',
        TICKET_CLAIM_ERROR: 'Błąd przy przejmowaniu ticketu:',
        TICKET_UNCLAIM_ERROR: 'Błąd przy odprzejmowaniu ticketu:',
        MESSAGE_DELETE_ERROR: '❌ Błąd przy usuwaniu wiadomości:',
        ROLE_NOT_FOUND: 'Nie znaleziono roli!'
    }
};
