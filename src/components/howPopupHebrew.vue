<template>
  <div class="modal fade in commom-modal howtous" id="about" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="modal-dialog modal-lg how-to-modal-dialog">
      <!-- Modal content-->
      <div class="modal-content how-to-modal-content">
        <div class='popup-header-dev row no-gutters'>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <button type="button" data-dismiss="modal" class="common-close-btn"><i
              class="close-btn-icon fa fa-times"></i>סגור
            </button>
            <button type="button" data-dismiss="modal" class="mobile-close-button"><i
              class="close-btn-icon fa fa-times"></i></button>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <div class='wrap-txt'>
              <h1 class='f black title header-title'>איך זה עובד</h1>
            </div>
          </div>
        </div>
        <div class="how-to-inner-content">
          <p class="para"> מנוע החיפוש בתנ״ך מבית דיקטה מאפשר חיפוש מילים וביטויים בתנ״ך באופן אינטואיטיבי, מבלי להתעסק
            בהבדלי איות והטיה. <br/>
            תוצאות חיפוש של מילה אחת או יותר, יכללו פסוק/פסוקים בהם מופיעות מילות החיפוש עם וריאציות באיות ובהטיה. <br/>
            התוצאות מופיעות לפי סדר הרלוונטיות. ניתן לבחור להציגן לפי סדר הופעתן בתנ״ך.</p>

          <hr/>

          <h2 class="heading-h2">נהלו את תוצאות החיפוש</h2>
          <p class="para"> לצד התוצאות, תוכלו למצוא כלים בעזרתם תוכלו למקד או להרחיב את החיפוש. <br/>
            איך משתמשים בכלים ואיך הם משפיעים על התוצאות?</p>

          <h3 class="heading-h3">משמעויות</h3>
          <p class="para"> בחרו את המשמעות הרצויה של מילת החיפוש. <br/>
            לדוגמה: אם מילת החיפוש היא דוד, אפשר לבחור האם הכוונה היא ל דוד במשמעות של שם איש, או דוד במשמעות של בן
            משפחה? <br/>
            בנוסף, ניתן להוסיף לתוצאות החיפוש מילים בעלות משמעות זהה למילת החיפוש. <br/>
            לדוגמה: עבור מילת החיפוש אריה, תוכלו לבקש גם תוצאות של ליש, לביא וכפיר.
          </p>

          <h3 class="heading-h3">הטיות</h3>
          <p class="para"> צמצמו את ההטיות של מילת החיפוש, להטיות הרצויות.
            לדוגמא: עבור חיפוש של המילה
            <strong>
              אריה,
            </strong>
            תקבלו תוצאות כמו
            <strong>
              הָאַרְיֵה ולַאֲרָיֹות,
            </strong>
            ובנוסף גם הטיות אחרות של
            <strong>
              אריה,
            </strong>
            שמהם תוכלו לבחור את ההטיות הרלוונטיות עבורכם.
            <br/>
            הערה: אם הזנתם מילת חיפוש ספציפית, למשל
            <strong>
              לַאֲרָיֹות,
            </strong>
            תקבלו רק תוצאות המכילות את מילת החיפוש הספציפית.

          </p>

          <h3 class="heading-h3">ספרים</h3>
          <p class="para"> הגדירו מאילו ספרים אתם מעוניינים שיוצגו תוצאות.</p>

          <hr/>

          <h3 class="heading-h3">דוגמאות לחיפושים שונים</h3>

          <ul class="list-ul">
            <li class="list-li">חיפוש על פי אותיות השורש <br/>
              חפשו <strong>״ברא״</strong> וקבלו <strong>״וַיִּבְרָא״</strong></li>

            <li class="list-li"> כתיב מלא/חסר <br/>
              חפשו <strong> ״דָּוִיד״ </strong> וקבלו <strong>״דָוִד״</strong>
            </li>

            <li class="list-li"> סיומות שונות: גוף ראשון/שני/שלישי, זכר/נקבה, יחיד/רבים <br/>
              לדוגמה סיומות גוף שני - <strong>אֹתְכָה/אֹותְךָ</strong> <br/>
              לדוגמה סיומות גוף שני, נקבה - <strong> גַּרְתָּה/גַּרְתָּ </strong><br>
              לדוגמה סיומת גוף שלישי - <strong> כֻּלֹּה/כֻּלֹּו </strong>
            </li>

            <li class="list-li"><strong>א</strong>׳ חסרה או נוספת <br/>
              חפשו <strong>״ונטמאתם״</strong> וקבלו <strong>״וְנִטְמֵתֶם״</strong> <br/>
              חפשו <strong>״ורציתי״</strong> וקבלו <strong> ״וְרָצִאתִי״ </strong>
            </li>

            <li class="list-li"> ה׳ חסרה או נוספת<br/>
              חפשו <strong>״כָּמֹוךָ״ </strong> וקבלו <strong> ״כָמֹכָה״ </strong>
            </li>

            <li class="list-li">אותיות מתחלפות <br/>
              חפשו <strong>״ימלא״</strong> וקבלו <strong>״ימַלֵּה״</strong><br/>

              חפשו <strong>״וארסתיך״</strong> וקבלו <strong> ״וְאֵרַשְׂתִּיךְ״</strong>
            </li>

            <li class="list-li"> כל הכינויים של ה׳ <br/>
              חפשו <strong>״א-להים״</strong> (עם מקף) וקבלו תוצאות של אותו הביטוי (באיות מלא) רק במשמעות של <strong>הָאֱלֹהִ֣ים</strong>.
            </li>

            <li class="list-li"> חיפוש באמצעות ספרות <br/>
              חפשו
              <strong>״127״ </strong>
              וקבלו <strong>״וַיִּהְיוּ חַיֵּי שָׂרָה מֵאָה שָׁנָה וְעֶשְׂרִים שָׁנָה וְשֶׁבַע שָׁנִים״</strong></li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'howPopupHebrew',
  data () {
    return {}
  }
}
</script>
<style scoped src="./styles/common-modal.css"></style>
<style scoped src="./styles/common-howToUse-popup.css"></style>
<style scoped>
  .how-to-modal-dialog {
    text-align: right;
  }
  .list-li {
    padding: 0 18px 20px 0;
  }
  .list-li:before {
    right: 0;
  }

</style>
