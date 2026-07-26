# Nákupko — web pro App Store

Hotový, responzivní web pro aplikaci **Nákupko** (chytrý nákupní seznam pro iPhone).
Čistý HTML/CSS/JS, bez frameworků a bez cookies. Světlý i tmavý režim, animace, SEO a Open Graph.

## Co web obsahuje

| Soubor | Účel |
|---|---|
| `index.html` | Landing page — hero, funkce, Premium, náhledy, FAQ, kontakt |
| `privacy.html` | **Zásady ochrany soukromí** (Privacy Policy URL do App Store Connect) |
| `terms.html` | **Podmínky používání** vč. podmínek předplatného (EULA / Terms of Use) |
| `support.html` | **Podpora** (Support URL do App Store Connect) |
| `css/style.css` | Styly, světlý/tmavý režim, responzivita |
| `js/main.js` | Přepínání tématu, mobilní menu, FAQ, animace |
| `favicon.svg` | Ikona webu (košík) |
| `robots.txt`, `sitemap.xml`, `404.html`, `.nojekyll` | Nasazení a SEO |

## Co vložit do App Store Connect

| Pole | Hodnota (po nasazení) |
|---|---|
| Privacy Policy URL | `https://<tvoje-adresa>/privacy.html` |
| Support URL | `https://<tvoje-adresa>/support.html` |
| Marketing URL (volitelné) | `https://<tvoje-adresa>/` |

## Než web nasadíš — 3 věci k úpravě

1. **E-mail** je všude `romankonagy@gmail.com`. Chceš-li jiný, přepiš ho ve všech `.html` (najdi/nahraď).
2. **Doména** — v `sitemap.xml` a `robots.txt` nahraď `REPLACE-WITH-YOUR-DOMAIN` svou skutečnou adresou.
   Pokud doménu (zatím) nemáš, tyto dva soubory můžeš klidně smazat — web funguje i bez nich.
3. **Screenshoty** — v `index.html` v sekci „Náhledy“ jsou placeholdery. Můžeš je nahradit `<img>` s reálnými screenshoty (nepovinné pro schválení).

## Jak web zveřejnit (vyber si jeden způsob)

### A) GitHub Pages — zdarma, doporučeno
1. Vytvoř nový repozitář, např. `nakupko`.
2. Nahraj do něj **obsah této složky** (ne složku samotnou — soubory `index.html`, `privacy.html`, … musí být v kořeni repa).
3. V repu: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, složka `/ (root)`, ulož.
4. Za pár minut poběží na `https://<tvůj-github>.github.io/nakupko/`.
   - Privacy Policy URL bude: `https://<tvůj-github>.github.io/nakupko/privacy.html`

> Poznámka: při adrese s podsložkou (`/nakupko/`) fungují všechny odkazy, protože web používá **relativní cesty**.

### B) Vercel — zdarma
1. Přihlas se na vercel.com (přes GitHub).
2. **Add New → Project**, vyber repozitář (nebo přetáhni složku přes „Deploy“).
3. Framework preset: **Other**, žádný build command, output = kořen. Deploy.
4. Dostaneš adresu typu `https://nakupko.vercel.app`.

### C) Netlify — zdarma
1. Na netlify.com zvol **Add new site → Deploy manually**.
2. Přetáhni celou tuto složku do okna.
3. Dostaneš adresu typu `https://nakupko.netlify.app`.

## Vlastní doména (volitelné)
Pokud si koupíš `nakupko.app` nebo `nakupko.sk`, můžeš ji u kteréhokoli z výše uvedených
poskytovatelů připojit v nastavení domén. Pak URL vypadají čistě, např. `https://nakupko.app/privacy.html`.

## Lokální náhled
Stačí otevřít `index.html` v prohlížeči. Vše je statické, není potřeba žádný server.

---

**Právní upozornění:** Texty Privacy Policy a Terms of Use jsou připraveny na míru tomu, co Nákupko
dělá (iCloud/CloudKit, Sign in with Apple, kamera pro čárové kódy, Open Food Facts, předplatné).
Jsou to ale obecné vzory, ne právní poradenství. Před ostrým spuštěním si je projdi a případně nech
zkontrolovat, zda odpovídají realitě tvé aplikace.
