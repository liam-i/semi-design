

import { pl } from 'date-fns/locale';
import { Locale } from '../interface';

/**
 * [i18n-Poland (pl_PL)]
 * 波兰语
 *
 */

const local: Locale = {
    code: 'pl_PL',
    dateFnsLocale: pl, // locale code to dateFns locale
    Pagination: {
        pageSize: 'Pozycje na stronie: ${pageSize}',
        total: 'Razem stron: ${total}',
        jumpTo: 'Przejdź do',
        page: 'stron',
    },
    Modal: {
        confirm: 'Potwierdź',
        cancel: 'Anuluj',
    },
    TimePicker: {
        placeholder: {
            time: 'Wybierz czas',
            timeRange: 'Wybierz przedział czasowy',
        },
        begin: 'Czas rozpoczęcia',
        end: 'Czas zakończenia',
        hour: '',
        minute: '',
        second: '',
        AM: '',
        PM: '',
    },
    DatePicker: {
        placeholder: {
            date: 'Wybierz datę',
            dateTime: 'Wybierz datę i godzinę',
            dateRange: ['Data rozpoczęcia', 'Data zakończenia'],
            dateTimeRange: ['Data rozpoczęcia', 'Data zakończenia'],
        },
        footer: {
            confirm: 'Potwierdź',
            cancel: 'Anuluj',
        },
        selectDate: 'Wybierz datę',
        selectTime: 'Wybierz godzinę',
        year: '',
        month: '',
        day: '',
        monthText: '${month} ${year}',
        months: {
            1: 'Sty',
            2: 'Lut',
            3: 'Mar',
            4: 'Kwi',
            5: 'Maj',
            6: 'Cze',
            7: 'Lip',
            8: 'Sie',
            9: 'Wrz',
            10: 'Paź',
            11: 'Lis',
            12: 'Gru',
        },
        fullMonths: {
            1: 'styczeń',
            2: 'luty',
            3: 'marzec',
            4: 'kwiecień',
            5: 'maj',
            6: 'czerwiec',
            7: 'lipiec',
            8: 'sierpień',
            9: 'wrzesień',
            10: 'październik',
            11: 'listopad',
            12: 'grudzień',
        },
        weeks: {
            Mon: 'Po',
            Tue: 'Wt',
            Wed: 'Śr',
            Thu: 'Cz',
            Fri: 'Pt',
            Sat: 'So',
            Sun: 'Nd',
        },
        localeFormatToken: {
            FORMAT_SWITCH_DATE: 'yyyy-MM-dd',
        },
    },
    Navigation: {
        collapseText: 'Ukryj pasek boczny',
        expandText: 'Pokaż pasek boczny',
    },
    Popconfirm: {
        confirm: 'Potwierdź',
        cancel: 'Anuluj',
    },
    Table: {
        emptyText: 'Nie znaleziono żadnych wyników',
        pageText: 'Wyświetlanie od ${currentStart} do ${currentEnd} z ${total}',
    },
    Select: {
        emptyText: 'Nie znaleziono żadnych wyników',
        createText: 'Utwórz',
    },
    Cascader: {
        emptyText: 'Nie znaleziono żadnych wyników',
    },
    Tree: {
        emptyText: 'Nie znaleziono żadnych wyników',
        searchPlaceholder: 'Wyszukaj',
    },
    List: {
        emptyText: 'Nie znaleziono żadnych wyników',
    },
    Calendar: {
        allDay: 'Cały dzień',
        AM: '${time} AM',
        PM: '${time} PM',
        datestring: '',
        remaining: 'jeszcze ${remained}',
    },
    Upload: {
        mainText: 'Kliknij, aby wybrać plik, lub przeciągnij go tutaj, aby go przesłać.',
        illegalTips: 'Ten typ pliku jest nieobsługiwany.',
        legalTips: 'Zwolnij, aby rozpocząć przesyłanie.',
        retry: 'Spróbuj ponownie',
        replace: 'Zastąp plik',
        clear: 'Wyczyść',
        selectedFiles: 'Wybrane pliki',
        illegalSize: 'Nieprawidłowy rozmiar pliku',
        fail: 'Nie można przesłać',
    },
    TreeSelect: {
        searchPlaceholder: 'Wyszukaj',
    },
    Typography: {
        copy: 'Kopiuj',
        copied: 'Skopiowano',
        expand: 'Pokaż więcej',
        collapse: 'Ukryj',
    },
    Transfer: {
        emptyLeft: 'Brak danych',
        emptySearch: 'Brak wyników wyszukiwania',
        emptyRight: 'Tutaj pojawią się wybrane przedmioty. Wybierz przedmiot z lewej strony',
        placeholder: 'Wyszukaj',
        clear: 'Wyczyść',
        selectAll: 'Zaznacz wszystkie',
        clearSelectAll: 'Usuń zaznaczenie wszystkich',
        total: 'Całkowita ilość: ${total}',
        selected: 'Wybrana ilość: ${total}', 
    },
    Form: {
        optional: '（Opcjonalnie）',
    },
    Image: {
        preview: 'Podgląd',
        loading: 'Zgrywanie',
        loadError: 'Nie można zgrać',
        prevTip: 'Wstecz',
        nextTip: 'Dalej',
        zoomInTip: 'Powiększ',
        zoomOutTip: 'Pomniejsz',
        rotateTip: 'Obróć',
        downloadTip: 'Pobierz',
        adaptiveTip: 'Dostosowywanie ekranu',
        originTip: 'Wyświetlacz domyślny',
    },
};

export default local;
