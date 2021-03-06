const changelog = {
    "0.15.0" : {
        "Banned and Restricted cards": "You will see banned cards in red color now and restricted once in yellow.",
        "Shardfall" : "Mistakes I made should hopefully be less impactful now. If there is an issue with the page you will see a Shardfall token page. But application bar should be available meaning that you should be able to use those things which could still be stable." 
    },
    "0.14.0" : {
        "Export to PDF": "It should be possible now to save decks as pdf files."
    },
    "0.13.0" : {
        "Sign Up": "User can choose to sign up on the website and later login with email and password.",
        "Card Library as Images": "It is possible to choose how you want to browse card library - as simple names or as images"
    },
    "0.12.0" : {
        "Card Library (alpha)" : "Alpha version of card library has been added."
    },
    "0.11.0" : {
        "User Profile Page": "You should be able to change your name which will be assosiated with the deck of your authorship.",
        "Pagination for Decks": "Decks page was very slow, so the pagination has been added to improve performance."
    }, 
    "0.10.0" : {
        "Deck's editing" : "You should be able to edit deck's you've made, those which you can find on MyDecks page.",
        "Feedback page" : "You should be able to get in touch with author of this website via email",
        "Bug fixes" : "Small amount of known bugs were fixed."
    },
    "0.9.0" : {
        "New Factions, new sets": "Added Eyes of the Nine, Zarbag's Gitz, Garrek's Reavers, Stealhearth's Champions, Echoes of Glory expanstions.",
        "Application Bar": "Now sticks at top, always visible"
    },
    "0.8.1" : {
        "Hotfix": "Broken save deck functionality should be working now."
    },
    "0.8.0" : {
        "Statistics": "A new page for the game statistics visualization has been added."
    },
    "0.7.1" : {
        "Hotfix": "Hot fixed crash on reading **MyDecks**."
    },
    "0.7.0" : {
        "Filter Decks by Faction": "It's possible now to filter decks by chosing a faction. Finding decks should become much easier."
    },
    "0.6.1" : {
        "Hotfix": "Hot fixed saving deck logic for authorized users."
    },
    "0.6.0" : {
        "Fixed Deck Faction Images" : "Fixed images of the deck's faction not shown after the latest db changes.",
        "Deck Author": "It should be possible to see deck's author in the decks list.",
        "Description instead of Source": "When you create a deck you now have a field to provide some description for the deck. Old **Source** field has been removed because its usage was misleading."
    },
    "0.5.0" : {
        "User Profile foundation": "Minor changes to how users data store in the database, which is foundation for a future **profile page**.",
        "Minor fixes": "Some minor fixes for the **Deck Builder** page."
    },
    "0.4.0" : {
        "Redesign Faction Selector": "Faction selector in the Deck builder has been redesigned a bit to improve readability. Best viewed on mobile."
    },
    "0.3.0" : {
        "Social Login in PWA": "The issue with using social login when you run app from the homescreen should be solved now."
    },
    "0.2.0" : {
        "Nightvault Core Set": "Nightvault has been opened at YAWUdb:/n- Added **Stormsire's Cursebreakers** faction;/n - Added **Throns of the Briar Queen** faction;/n- Added **Nightvault Core Set** to the expansion toggle.",
        "Better visualization for Objectives scoring": "All **Objectives** from now on have an icon assosiated with them specifying how you score that objective:/n - *Flash* - Score it immediately;/n - *Empty Hour Glass* - Score it in the first or second end phase;/n- *Clock* - Score it in the end phase;/n- *Full Hour Glass* - Score it in the third end phase."
    },
    "0.1.0" : {
        "Caching": "More caching has been implemented for the *Deck Builder* page:/n- Selected **Faction** and **Sets** will stay selected until you change them;/n- Selected **cards** will stay selected until you save the deck or unselect them or click *RESET ALL* button;/n- Deck's **Name** and **Source** will be preserved until you change them or save the deck.",
        "PWA": "The app running from the homescreen will be set to the *last visited route* when re-started from homescreen or by comming from background (when you for example switched between the app and some other screen)."
    }
}

export default changelog;