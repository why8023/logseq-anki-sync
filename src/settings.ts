import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin';
export const addSettingsToLogseq = () => {
    const settingsTemplate: SettingSchemaDesc[] = [{
        key: "hideNativeFlashcard",
        type: 'boolean',
        default: false,
        title: "Hide Logseq's Native Flashcards",
        description: "Hide Logseq's native flashcards from the left sidebar.",
    },
    {
        key: "breadcrumbDisplay",
        type: 'enum',
        default: "Show Page name and parent blocks context",
        title: "What to display in the breadcrumb?",
        description: "Pick what to display in the breadcrumb. NB: Show Page name and parent blocks context might slightly increase syncing time.",
        enumChoices: ["Show Page name only", "Show Page name and parent blocks context"],
        enumPicker: "select"
    },
    {
        key: "includeParentContent",
        type: 'boolean',
        default: false,
        title: "Include parent content in cards? (Experimental)",
        description: "Include parent content in cards NB: This might increase syncing time as well as size of the cards.",
    },
    {
      key: "defaultDeck",
      type: 'string',
      title: "Default Deck:",
      description: "The default deck to use for cards when page is not inside a namespace and no page or block deck property is specified.",
      default: "Default"
    },
    {
        key: "previewNotesInAnki",
        type: 'boolean',
        default: false,
        title: "Show Preview notes Context Menu (Experimental)",
        description: "Shows a 'Preview notes from block in Anki' Context Menu",
    },
    {
        key: "useCacheForConversion",
        type: 'boolean',
        default: true,
        title: "Enable Cache for Logseq to HTML Conversion? (Experimental)",
        description: "Enable Cache for Logseq to HTML Conversion. NB: It is recomended to disable this option if cards are not getting updated properly.",
    },
    {
        key: "syncDebug",
        type: 'boolean',
        default: false,
        title: "Enable Sync Debugging?",
        description: "This enables sync debugging mode. In sync debugging mode, the plugin will output more information to the console.",
    },
    {
        key: "converterDebug",
        type: 'boolean',
        default: false,
        title: "Enable Converter Debugging?",
        description: "This enables converter debugging mode. In converter debugging mode, the plugin will output more information to the console.",
    }];
    logseq.useSettingsSchema(settingsTemplate);

    // Add some on settings change handling
    logseq.onSettingsChanged(() => {
        if(logseq.settings.hideNativeFlashcard) {
          logseq.provideStyle({
            key: 'logseq-anki-sync-hide-native-flashcard',
            style: String.raw`
            .flashcards-nav {
              display: none;
            }
           `});
        }
        else {
          logseq.provideStyle({
            key: 'logseq-anki-sync-hide-native-flashcard',
            style: String.raw`
            .flashcards-nav {
              display: block;
            }
           `});
        }
      }); 
};